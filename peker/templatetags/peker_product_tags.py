from django import template
from django.template.loader import select_template
from datetime import datetime, timedelta
from django.utils import timezone
from django.conf import settings

from catalogue.models import Product


register = template.Library()


@register.simple_tag(takes_context=True)
def render_peker_product(context, product, search=False):
    """
    Render a product snippet as you would see in a browsing display.

    This templatetag looks for different templates depending on the UPC and
    product class of the passed product.  This allows alternative templates to
    be used for different product classes.
    """
    if not product:
        # Search index is returning products that don't exist in the
        # database...
        return ''

    names = ['catalogue/partials/product/upc-%s.html' % product.upc,
             'catalogue/partials/product/class-%s.html'
             % product.get_product_class().slug,
             'catalogue/partials/peker_product.html']
    template_ = select_template(names)

    
    is_new_product = False
    is_product_in_basket = False
    time_threshold = timezone.now() - timedelta(minutes=60)
    is_new_product = (product.date_created > time_threshold)

    if not search:        
        basket = context['basket']        
        if product.is_parent:
            for product_child in Product.objects.filter(parent=product):
                if (basket.product_quantity(product_child) > 0):
                    is_product_in_basket = (basket.product_quantity(product_child) > 0)
        else:
            is_product_in_basket = (basket.product_quantity(product) > 0) 
        

    # Ensure the passed product is in the context as 'product'
    context['is_new_product'] = is_new_product
    context['is_product_in_basket'] = is_product_in_basket
    if product.is_parent:
        context['first_category'] = product.productcategory_set.all()[0].category
    elif product.is_child:
        context['first_category'] = product.parent.productcategory_set.all()[0].category
    
    context['product'] = product
    return template_.render(context)

# settings value
@register.simple_tag
def settings_value(name):
    print    'EN EL TAG'
    return getattr(settings, name, "")

