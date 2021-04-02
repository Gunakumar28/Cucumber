Feature: verifing the adactin webpage details
Background:
Given user lanch the adactin weebpage

Scenario Outline: validation of Login page amd booking page using valid credantials
When user should enter valid "<username>"and"<password>"
And user should click on the login button
And user should enter valid credantials "<Location>","<Hotels>","<Room Type>","<Number of Rooms>","<Check In Date>","<Check Out Date>","<Adults per Room>","<Children per Room>"
And user should click on search button
And user should click on radio button
And user should click on continue button
And user should enter  credantials "<First Name>","<Last Name>","<Billing Address>","<Credit Card No.>","<Credit Card Type>","<Expiry Month>","<Expiry Year>","<CVV Number>"
And  user should click on booknow button
Then user verify the success message and get order number.


Examples:
| username     | password | Location | Hotels      | Room Type | Number of Rooms | Check In Date | Check Out Date | Adults per Room | Children per Room | First Name | Last Name | Billing Address | Credit Card No.  | Credit Card Type | Expiry Month | Expiry Year | CVV Number |
| govindasrini | srini123 | Sydney   | Hotel Creek | Standard  | 1-One           | 26/02/2021    | 27/02/2021     | 1-One           | 1-One             | ramesh     | kannan    | no.4 chennai    | 1234567897894561 | VISA             | May          |        2022 |        066 |

Scenario Outline: validation of Login page amd booking page using valid credantials
When user should enter valid "<username>"and"<password>"
And user should click on the login button
And user should enter valid credantials "<Location>","<Hotels>","<Room Type>","<Number of Rooms>","<Check In Date>","<Check Out Date>","<Adults per Room>","<Children per Room>"
And user should click on search button
And user should click on radio button
And user should click on continue button
And user should enter  credantials "<First Name>","<Last Name>","<Billing Address>","<Credit Card No.>","<Credit Card Type>","<Expiry Month>","<Expiry Year>","<CVV Number>"
And  user should click on booknow button
Then user verify the success message and get order number.

Examples:
| username     | password | Location | Hotels      | Room Type | Number of Rooms | Check In Date | Check Out Date | Adults per Room | Children per Room | First Name | Last Name | Billing Address | Credit Card No.  | Credit Card Type | Expiry Month | Expiry Year | CVV Number |
| govindasrini | srini123 | Sydney   | Hotel Creek | Standard  | 1-One           | 26/02/2021    | 27/02/2021     | 1-One           | 1-One             | ramesh     | kannan    | no.4 chennai    | 1234567897894561 | VISA             | May          |        2022 |        066 |
