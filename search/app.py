from oscar.apps.search.app import SearchApplication as CoreSearchApplication
from oscar.apps.catalogue.views import ProductCategoryView

from django.conf.urls import url
from haystack.views import search_view_factory




class CatView(ProductCategoryView):
    template_name = 'search/results.html'
    enforce_paths = False


class SearchApplication(CoreSearchApplication):

    def get_urls(self):

        # The form class has to be passed to the __init__ method as that is how
        # Haystack works.  It's slightly different to normal CBVs.
        urlpatterns = [
            url(r'^$', search_view_factory(
                view_class=self.search_view,
                form_class=self.search_form,
                searchqueryset=self.get_sqs()),
                name='search'),
            url(r'^categoria/(?P<category_slug>[\w-]+(/[\w-]+)*)_(?P<pk>\d+)/$', CatView.as_view(), name='catsearch'),
        ]
        return self.post_process_urls(urlpatterns)


application = SearchApplication()