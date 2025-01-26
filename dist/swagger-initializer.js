window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [{
      url: "swagger-email-services.yaml",
      name: "OpenAPI 3.0 Email Services"
    },
    {
      url: "swagger-notification-services.yaml",
      name: "OpenAPI 3.0 Notification Services"
    },
    {
      url: "swagger-sms-services.yaml",
      name: "OpenAPI 3.0 SMS Services"
    }],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
