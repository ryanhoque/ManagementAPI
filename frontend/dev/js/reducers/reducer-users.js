/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Adrien",
            last: "Olczak",
            email: "adrien@instawork.com",
            phone: "415-310-1619",
            role: "admin",
            thumbnail: "http://i.imgur.com/7yUvePI.jpg"
        },
        {
            id: 2,
            first: "Charlene",
            last: "Pham",
            email: "charlene@instawork.com",
            phone: "415-310-1619",
            role: "regular",
        },
        {
            id: 3,
            first: "Benson",
            last: "Mach",
            email: "benson@instawork.com",
            phone: "415-310-1619",
            role: "regular",
        },
        {
            id: 4,
            first: "Dan",
            last: "Petrie",
            email: "dan@instawork.com",
            phone: "415-310-1619",
            role: "regular",
        }
    ]
}
