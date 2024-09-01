import one from './1.jpeg'
import two from './2.jpeg'
import three from './3.jpeg'
import four from './4.jpeg'
import five from './5.jpeg'
import six from './6.jpeg'
import seven from './7.jpeg'
import eight from './8.jpeg'
const images = {
  one,two,three,four,five,six,seven,eight
}


export const loans = [
  {
    id: 1,
    type: "Two-Wheeler Loan",
    description: "Loan for purchasing a new or used motorcycle or scooter.",
    interestRate: "8.5% - 12%",
    repaymentPeriod: "12 - 60 months",
    maximumLoanAmount: "Up to ₹2,00,000",
    imageUrl:images.one,
    primaryBgColor: "bg-blue-100",  // Light blue
    secondaryBgColor: "bg-blue-200" // Slightly darker blue
  },
  {
    id: 2,
    type: "Used Car Loan",
    description: "Loan for purchasing a pre-owned car.",
    interestRate: "9% - 14%",
    repaymentPeriod: "24 - 84 months",
    maximumLoanAmount: "Up to ₹10,00,000",
    imageUrl: images.two,
    primaryBgColor: "bg-green-100",  // Light green
    secondaryBgColor: "bg-green-200" // Slightly darker green
  },
  {
    id: 3,
    type: "Three-Wheeler Loan",
    description: "Loan for purchasing a new or used three-wheeler vehicle for commercial use.",
    interestRate: "8% - 13%",
    repaymentPeriod: "12 - 60 months",
    maximumLoanAmount: "Up to ₹5,00,000",
    imageUrl: images.three,
    primaryBgColor: "bg-yellow-100",  // Light yellow
    secondaryBgColor: "bg-yellow-200" // Slightly darker yellow
  },
  {
    id: 4,
    type: "Tractor Loan",
    description: "Loan for purchasing a new or used tractor for agricultural purposes.",
    interestRate: "7% - 11%",
    repaymentPeriod: "24 - 84 months",
    maximumLoanAmount: "Up to ₹15,00,000",
    imageUrl:images.four,
    primaryBgColor: "bg-red-100",  // Light red
    secondaryBgColor: "bg-red-200" // Slightly darker red
  },
  { 
    id: 5,
    type: "Used Commercial Vehicle Loan",
    description: "Loan for purchasing a pre-owned commercial vehicle.",
    interestRate: "9% - 15%",
    repaymentPeriod: "24 - 72 months",
    maximumLoanAmount: "Up to ₹20,00,000",
    imageUrl:images.five,
    primaryBgColor: "bg-purple-100",  // Light purple
    secondaryBgColor: "bg-purple-200" // Slightly darker purple
  },
  {
    id: 6,
    type: "Business Loan",
    description: "Loan for business purposes, including vehicle financing for business operations.",
    interestRate: "10% - 18%",
    repaymentPeriod: "12 - 60 months",
    maximumLoanAmount: "Up to ₹50,00,000",
    imageUrl: images.six,
    primaryBgColor: "bg-indigo-100",  // Light indigo
    secondaryBgColor: "bg-indigo-200" // Slightly darker indigo
  },
  {
    id: 7,
    type: "Consumer Durable Loan",
    description: "Loan for purchasing consumer durables like appliances and electronics, including vehicles.",
    interestRate: "12% - 20%",
    repaymentPeriod: "6 - 24 months",
    maximumLoanAmount: "Up to ₹1,00,000",
    imageUrl: images.seven,
    primaryBgColor: "bg-orange-100",  // Light orange
    secondaryBgColor: "bg-orange-200" // Slightly darker orange
  },
  {
    id: 8,
    type: "Personal Loan",
    description: "Unsecured loan for personal use, which can also be used for purchasing a vehicle.",
    interestRate: "10% - 22%",
    repaymentPeriod: "12 - 60 months",
    maximumLoanAmount: "Up to ₹5,00,000",
    imageUrl: images.eight,
    primaryBgColor: "bg-teal-100",  // Light teal
    secondaryBgColor: "bg-teal-200" // Slightly darker teal
  }
];
