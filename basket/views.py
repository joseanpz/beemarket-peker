from oscar.apps.basket.views import BasketAddView as CoreBasketAddView
from django.utils.http import is_safe_url
from oscar.core.utils import safe_referrer
from django.core.urlresolvers import reverse


class BasketAddView(CoreBasketAddView):

    def get_success_url(self):
        post_url = self.request.POST.get('next')

        if post_url and is_safe_url(post_url, self.request.get_host()):
            return post_url

        return reverse('basket:summary')
