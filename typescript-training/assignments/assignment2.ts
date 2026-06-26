//Assignment-2 (Conditional Statements)

//Create common function and then based on below details, print whether user is eligible to get the loan or not
//customerName = "John Doe";
//creditScore = 720;
//income = 55000.0;
//isEmployed = true;
//debtToIncomeRatio = 35.0;

//A bank evaluates loan applicants based on the following criteria:
//1. Credit Score:
    //If the credit score is above 750, the loan is automatically approved.
    //If the credit score is between 650 and 750, additional checks are performed.
    //If the credit score is below 650, the loan is denied.
//2. Income:
//For credit scores between 650 and 750, the customer’s income must be at least $50,000 for the loan to be considered.

//3. Employment Status:
    //If the customer’s income is at least 50,000, the system checks whether the customer is employed.
    //If the customer is unemployed, the loan is denied.
//4. Debt-to-Income Ratio:
    //If the customer is employed, the system checks the debt-to-income (DTI) ratio.
    //If the DTI ratio is less than 40%, the loan is approved.
    //If the DTI ratio is 40% or greater, the loan is denied.

 //Input Values
let customerName = "John Doe";
let creditScore = 720;
let income = 55000.0;
let isEmployed = true;
let debtToIncomeRatio = 35.0;

 Loancheck
    (
        customerName,
        creditScore,
        income,
        isEmployed,
        debtToIncomeRatio
    );
function Loancheck
    (   
        ConsumerName : string,
        creditScore : number,
        income : number,
        isEmployed : boolean,
        debtToIncomeRatio : number,
    ) : void {
            console.log(`Loan Eligibility check for : ${customerName}`);
            console.log(`${customerName} has Credit Score ${creditScore}`);
            console.log(`${customerName} has Income of Rupees ${income}`);

             // 1. Credit Score Check
             if (creditScore > 750) 
                {
                console.log("Loan Approved (Excellent Credit Score)");
                } 
                else 
                    {
                    if (creditScore >= 650) 
                            {
                            // 2. Income Check
                            if (income >= 50000) 
                                {
                                    // 3. Employment Check
                                    if (isEmployed) 
                                    {
                                            // 4. Debt-to-Income Ratio Check
                                            if (debtToIncomeRatio < 40) 
                                            {
                                            console.log("Loan Approved");
                                            } 
                                            else 
                                                {
                                                console.log("Loan Denied (High Debt-to-Income Ratio)");
                                                }

                                    } else 
                                        {
                                            console.log("Loan Denied (Customer is Unemployed)");
                                        }

                                } else 
                                    {
                                        console.log("Loan Denied (Income less than $50,000)");
                                    }

                            } else 
                                {
                                    console.log("Loan Denied (Low Credit Score)");
                                }
                    }
            }