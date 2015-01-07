<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>AddressBook</title>
    
    <link rel="stylesheet" type="text/css" href="${_r.contextPath}/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="${_r.contextPath}/css/MainView.css">
    <link rel="stylesheet" type="text/css" href="${_r.contextPath}/css/GroupPopupView.css">
    <link rel="stylesheet" type="text/css" href="${_r.contextPath}/css/ContactPopupView.css">
    
    <script type="text/javascript" src="${_r.contextPath}/js/jquery.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/handlebars.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/brite.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/templates.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/main.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/GroupPopupView.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/ContactPopupView.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/brite.InMemoryDaoHandler.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/MainView.js"></script>
    
  </head>

  <body>
      <!-- Note: "includeFrameContent" is a Snow specific freemarker directive that allow to include the targeted template
        for this URL respecting the "_frame.ftl" hierarchy  -->
      [@includeFrameContent /]

  </body>
</html>