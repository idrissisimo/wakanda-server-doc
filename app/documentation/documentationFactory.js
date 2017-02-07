'use strict';

angular.module('wakanda-server-doc')
  .factory('documentationFactory', function () {

    function isAvailableDocPage(page, subpage) {
      var links = docPagesLinks();

      for (var i = 0; i < links.length; i++) {
        var pageInUrl = links[i].url.replace('#/doc/', '');

        if (pageInUrl === page && !subpage) {
          return true;
        }
        else if(pageInUrl === page && links[i].children) {
          for (var j = 0; j < links[i].children.length; j++) {
            if (links[i].children[j].page === subpage) {
              return true;
            }
          }
        }
      }

      return false;
    }

    function docPagesLinks() {
      //page property must equals to the part after #/doc/ or after #/doc/the_parent_page/
      return [
        {
          name: 'Overview',
          url: '#/doc/overview',
          page: 'overview',
          children: [
            {
              name: 'Solution',
              url: '#/doc/overview/solution',
              parentPage: 'overview',
              page: 'solution'
            },
            {
              name: 'Project',
              url: '#/doc/overview/project',
              parentPage: 'overview',
              page: 'project'
            },
            {
              name: 'Bootstrap',
              url: '#/doc/overview/bootstrap',
              parentPage: 'overview',
              page: 'bootstrap'
            },
            {
              name: 'Modules',
              url: '#/doc/overview/modules',
              parentPage: 'overview',
              page: 'modules'
            },
            {
              name: 'Services',
              url: '#/doc/overview/services',
              parentPage: 'overview',
              page: 'services'
            }
          ]
        },
        {
          name: 'Data Integration',
          url: '#/doc/data',
          page: 'data',
          children : [
            {
              name: 'Basics',
              url: '#/doc/data/basics',
              parentPage: 'data',
              page: 'basics'
            },
            {
              name: 'Client side',
              url: '#/doc/data/client-side',
              parentPage: 'data',
              page: 'client-side'
            },
            {
              name: 'Server Side',
              url: '#/doc/data/server-side',
              parentPage: 'data',
              page: 'server-side'
            },
            {
              name: 'Security',
              url: '#/doc/data/security',
              parentPage: 'data',
              page: 'security'
            },
            {
              name: 'Adding external data sources',
              url: '#/doc/data/adding-data-sources',
              parentPage: 'data',
              page: 'adding-data-sources'
            }
          ]
        },
        {
          name: 'Authentication',
          url: '#/doc/authentication',
          page: 'authentication',
          children: [
            {
              name: 'Default Mechanism',
              url: '#/doc/authentication/default',
              parentPage: 'authentication',
              page: 'default'
            },
            {
              name: 'Custom Authentication',
              url: '#/doc/authentication/custom',
              parentPage: 'authentication',
              page: 'custom'
            },
            {
              name: 'Custom Session Management',
              url: '#/doc/authentication/custom-session-management',
              parentPage: 'authentication',
              page: 'custom-session-management'
            }
          ]
        },
         {
          name: 'HTTP',
          url: '#/doc/http',
          page: 'http'
        },
        {
          name: 'Miscellaneous',
          url: '#/doc/miscellaneous',
          page: 'miscellaneous'
        },
        {
          name: 'Deployment',
          url: '#/doc/deployment',
          page: 'deployment',
          children: [
            {
              name: 'On-premise',
              url: '#/doc/deployment/on-premise',
              parentPage: 'deployment',
              page: 'on-premise'
            },
            {
              name: 'Cloud Deployment',
              url: '#/doc/deployment/cloud-deployment',
              parentPage: 'deployment',
              page: 'cloud-deployment',             
            }
          ]
        },
        {
          name: 'Wakanda User Space',
          url: '#/doc/console',
          page: 'console',
          children: [
            {
              name: 'Cloud Application',
              url: '#/doc/console/cloud-subscription',
              parentPage: 'console',
              page: 'cloud-subscription'
            },
            {
              name: 'Cloud Instance',
              url: '#/doc/console/cloud-instance',
              parentPage: 'console',
              page: 'cloud-instance'
            },
            {
              name: 'Cloud RDS',
              url: '#/doc/console/cloud-rds',
              parentPage: 'console',
              page: 'cloud-rds'
            },
            {
              name: 'On-Premise Application',
              url: '#/doc/console/on-premise-application',
              parentPage: 'console',
              page: 'on-premise-application'
            }
          ]
        }
      ];
    }

    return {
      isAvailableDocPage: isAvailableDocPage,
      docPagesLinks: docPagesLinks
    };
  });
