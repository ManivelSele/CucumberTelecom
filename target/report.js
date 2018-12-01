$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/org/maven/CucuTelecom/AddTarrif.feature");
formatter.feature({
  "name": "Add Tarrif page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User need to login with credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User need to be in add tarrif page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTarrifPage.user_need_to_be_in_add_tarrif_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.maven.CucuTelecom.AddTarrifPage.user_need_to_be_in_add_tarrif_page(AddTarrifPage.java:15)\r\n\tat ✽.User need to be in add tarrif page(src/main/java/org/maven/CucuTelecom/AddTarrif.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User need to enter the details",
  "keyword": "When "
});
formatter.match({
  "location": "AddTarrifPage.user_need_to_enter_the_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user need to submit the page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTarrifPage.user_need_to_submit_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/main/java/org/maven/CucuTelecom/HomePage.feature");
formatter.feature({
  "name": "Home page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User need to be in homw page and select the option",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User need to be in hone page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePagePage.user_need_to_be_in_hone_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.maven.CucuTelecom.HomePagePage.user_need_to_be_in_hone_page(HomePagePage.java:16)\r\n\tat ✽.User need to be in hone page(src/main/java/org/maven/CucuTelecom/HomePage.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User need to click on the add tarriff page",
  "keyword": "When "
});
formatter.match({
  "location": "HomePagePage.user_need_to_click_on_the_add_tarriff_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user need to verify current page is add tariff page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePagePage.user_need_to_verify_current_page_is_add_tariff_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/main/java/org/maven/CucuTelecom/Loogin.feature");
formatter.feature({
  "name": "Login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User need to login with credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User need to launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LooginPage.user_need_to_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user need to enter proper credentials",
  "keyword": "When "
});
formatter.match({
  "location": "LooginPage.user_need_to_enter_proper_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user need to login the page",
  "keyword": "Then "
});
formatter.match({
  "location": "LooginPage.user_need_to_login_the_page()"
});
formatter.result({
  "status": "passed"
});
});