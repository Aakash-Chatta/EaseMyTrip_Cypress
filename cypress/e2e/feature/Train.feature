Feature: To check different scenarios in EaseMyTrip using Cypress

  Scenario: Book a train ticket
    Given User navigates to EaseMyTrip railway website
    When User selects from city station name as "New Delhi"
    Then User selects to city station name as "Bengaluru"
    And User selects departure date as "01" month as "April" year as "2025"
    When User selects train no as "22692" and selects class as "3A"
    Then User Selects UserID as "userID"
    Then User selects free cancellation
    Then User enters email as "test@gmail.com" and phone number as "8080808080" in Contact Information
    Then User enters Name as "Test" age as "45" Berth as "Lower Berth" meal as "No Food" and gender as "Male" in Traveller Information
    Then User Selects insurance and enables auto upgradation


