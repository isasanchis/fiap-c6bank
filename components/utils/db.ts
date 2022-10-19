import TypeDb from "../../types/TypeDb";

const db: Array<TypeDb> = [
    {
        id: 1,
        type: "pix",
        amount: 100,
        date: "2020-01-01",
        description: "Pizza com a galera",
        operation: "credit"
    },
    {
        id: 2,
        type: "debit",
        amount: 40,
        date: "2020-01-10",
        description: "Gasolina",
        operation: "debit"
    },
    {
        id: 3,
        type: "ted",
        amount: 100,
        date: "2020-01-15",
        description: "Salário",
        operation: "credit"
    },
    {
        id: 4,
        type: "pix",
        amount: 150,
        date: "2020-01-20",
        description: "Hotel",
        operation: "credit"
    },
    {
        id: 5,
        type: "credit",
        amount: 90,
        date: "2020-01-21",
        description: "Restaurante",
        operation: "credit"
    },
]

export default db;