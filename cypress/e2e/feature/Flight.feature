Feature: To check different scenarios in EaseMyTrip using Cypress

  Scenario: Book a One-way Flight
    Given User navigates to EaseMyTrip Flight website
    Then User selects from city as "New delhi"
    Then User selects to city as "Pune"
    Then User selects date as "25" and month as "Dec" year as "2024"
    Then User selects class as "Business"
    Then User searches for flights and selects first flight
#    Then User selects "EaseFly" option
#    Then User selects "Yes" in trip insurance
#    When User Clicks continue it
#    Then Validation error should be visible
#    Then User enters "Test@gmail.com" in email and clicks continue
#    Then User enters title as "MR",first Name as "Test",last Name as "User",email as "Test@gmail.com",contact no as "8080909078"