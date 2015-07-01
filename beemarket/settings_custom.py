OSCAR_DASHBOARD_NAVIGATION = [
    {
        'label': _('Dashboard'),
        'icon': 'icon-th-list',
        'url_name': 'dashboard:index',
    },
    {
        'label': _('Orders'),
        'icon': 'icon-shopping-cart',
        'url_name': 'dashboard:order-list',
        #'label': _('Fulfilment'),
        #'icon': 'icon-shopping-cart',
        #'children': [
        #    {
        #        'label': _('Orders'),
        #        'url_name': 'dashboard:order-list',
        #    },
            #{
            #    'label': _('Statistics'),
            #    'url_name': 'dashboard:order-stats',
            #},
            #{
            #    'label': _('Partners'),
            #    'url_name': 'dashboard:partner-list',
            #},
            # The shipping method dashboard is disabled by default as it might
            # be confusing. Weight-based shipping methods aren't hooked into
            # the shipping repository by default (as it would make
            # customising the repository slightly more difficult).
            #{
            #    'label': _('Shipping charges'),
            #    'url_name': 'dashboard:shipping-method-list',
            #},
        #]
    },
    {
        'label': _('Customers'),
        'icon': 'icon-group',
        'url_name': 'dashboard:users-index',
        #'children': [
        #    {
        #        'label': _('Customers'),
        #        'url_name': 'dashboard:users-index',
        #    },
        #    {
        #        'label': _('Stock alert requests'),
        #        'url_name': 'dashboard:user-alert-list',
        #    },
        #]
    },
    #{
    #    'label': _('Offers'),
    #    'icon': 'icon-bullhorn',
    #    'children': [
    #        {
    #            'label': _('Offers'),
    #            'url_name': 'dashboard:offer-list',
    #        },
    #        {
    #            'label': _('Vouchers'),
    #            'url_name': 'dashboard:voucher-list',
    #        },
    #    ],
    #},
    # {
    #     'label': _('Content'),
    #     'icon': 'icon-folder-close',
    #     'children': [
    #         {
    #             'label': _('Content blocks'),
    #             'url_name': 'dashboard:promotion-list',
    #         },
    #         {
    #             'label': _('Content blocks by page'),
    #             'url_name': 'dashboard:promotion-list-by-page',
    #         },
    #         {
    #             'label': _('Pages'),
    #             'url_name': 'dashboard:page-list',
    #         },
    #         {
    #             'label': _('Email templates'),
    #             'url_name': 'dashboard:comms-list',
    #         },
    #         {
    #             'label': _('Reviews'),
    #             'url_name': 'dashboard:reviews-list',
    #         },
    #     ]
    # },
    {
        'label': _('Reports'),
        'icon': 'icon-bar-chart',
        'url_name': 'dashboard:reports-index',
    },
    {
        'label': _('Catalogue'),
        'icon': 'icon-sitemap',
        'children': [
            {
                'label': _('Products'),
                'url_name': 'dashboard:catalogue-product-list',
            },
            {
                'label': _('Product Types'),
                'url_name': 'dashboard:catalogue-class-list',
            },
            #{
            #    'label': _('Categories'),
            #    'url_name': 'dashboard:catalogue-category-list',
            #},
            #{
            #    'label': _('Ranges'),
            #    'url_name': 'dashboard:range-list',
            #},
            #{
            #    'label': _('Low stock alerts'),
            #    'url_name': 'dashboard:stock-alert-list',
            #},
        ]
    },
    {
        'label': _('Eventos'),
        'icon': 'icon-glass',
        'url_name': 'dashboard:event-list',
    },
    {
        'label': _('Plantillas'),
        'icon': 'icon-picture',
        'url_name': 'dashboard:template-list',
    },
]

OSCAR_SHOP_NAME = 'TEQUILA HM'
OSCAR_SHOP_TAGLINE = 'THM EN LINEA'