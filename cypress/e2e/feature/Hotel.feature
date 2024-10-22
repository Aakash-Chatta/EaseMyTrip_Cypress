Feature: To check different scenarios in EaseMyTrip using Cypress

  Scenario: Book a hotel
    Given User navigates to EaseMyTrip website
    Then User selects city as "New Delhi"
    When User selects checkin date as "20" month as "Dec" year as "2024"
    Then User selects checkout date as "24" month as "Dec" year as "2024"
    Then User selects 2 rooms and "1" adult in each room
    Then User clicks on search
    Then User selects Price Range as "Below 1500"
    Then User selects a Hotel named as "Hotel Maharaja Continental"
    Then User Enters Adult 1 First Name as "Test" Last Name as "User"
    Then User Enters Adult 2 First Name as "Testing" Last Name as "Website"
    Then User enters Email as "Testuser@gmail.com" and phone number as "8080737390"
