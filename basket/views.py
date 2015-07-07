import json

from django.template import RequestContext
from django.http import HttpResponse
from django.template.loader import render_to_string

from oscar.apps.basket.views import BasketAddView as CoreBasketAddView, BasketView as CoreBasketView
from django.utils.http import is_safe_url
from oscar.core.utils import safe_referrer
from django.core.urlresolvers import reverse

#
class BasketView(CoreBasketView):
    def json_response(self, ctx, flash_messages):
        print 'eco json response'
        basket_html = render_to_string(
            'basket/partials/peker_basket_content.html',
            RequestContext(self.request, ctx))
        payload = {
            'content_html': basket_html,
            'messages': flash_messages.as_dict()}
        return HttpResponse(json.dumps(payload),
                             content_type="application/json")

class BasketAddView(CoreBasketAddView):

    def get_success_url(self):
        post_url = self.request.POST.get('next')

        if post_url and is_safe_url(post_url, self.request.get_host()):
            return post_url

        return reverse('basket:summary')
