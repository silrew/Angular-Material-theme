import { of , BehaviorSubject}from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesRecordsService {

   sales = [{
    "id": 1,
    "date": "7/22/2019",
    "reference": "55289-138",
    "customer": "Vasili Lorraway",
    "NB_items": "22-712-3997",
    "total": 63.79,
       "person": {
      "first_name": "Vasili",
      "last_name": "Lorraway",
      "gender": "Male",
      "email": "vlorraway0@usda.gov",
      "address": "99682 Erie Crossing",
      "zip_code": "4110",
      "order": {
        "order_no": "55714-4416",
        "units": 5,
        "total": 147.52,
        "returned": true
      }
    }
  }, {
    "id": 2,
    "date": "6/14/2019",
    "reference": "51293-607",
    "customer": "Dix Summerlad",
    "NB_items": "74-897-6950",
    "total": 471.95,
    "person": {
      "first_name": "Dix",
      "last_name": "Summerlad",
      "gender": "Female",
      "email": "dsummerlad1@google.co.uk",
      "address": "0570 Eggendart Crossing",
      "zip_code": "601 81",
      "order": {
        "order_no": "50438-807",
        "units": 1,
        "total": 166.18,
        "returned": true
      }
    }
  }, {
    "id": 3,
    "date": "11/6/2019",
    "reference": "10267-1936",
    "customer": "Sally Oxenbury",
    "NB_items": "90-559-5079",
    "total": 425.49,
    "person": {
      "first_name": "Sally",
      "last_name": "Oxenbury",
      "gender": "Female",
      "email": "soxenbury2@lulu.com",
      "address": "71 Graceland Trail",
      "zip_code": "32304",
      "order": {
        "order_no": "63824-283",
        "units": 1,
        "total": 458.56,
        "returned": false
      }
    }
  }, {
    "id": 4,
    "date": "8/28/2019",
    "reference": "43269-700",
    "customer": "Elfie Witherop",
    "NB_items": "47-927-4576",
    "total": 445.65,
    "person": {
      "first_name": "Elfie",
      "last_name": "Witherop",
      "gender": "Female",
      "email": "ewitherop3@reddit.com",
      "address": "4 Elka Road",
      "order": {
        "order_no": "49288-0075",
        "units": 3,
        "total": 457.04,
        "returned": true
      }
    }
  }, {
    "id": 5,
    "date": "5/6/2019",
    "reference": "0268-0897",
    "customer": "Early Dallas",
    "NB_items": "33-751-8753",
    "total": 126.62,
    "person": {
      "first_name": "Early",
      "last_name": "Dallas",
      "gender": "Male",
      "email": "edallas4@cloudflare.com",
      "address": "0260 Petterle Court",
      "zip_code": "9001",
      "order": {
        "order_no": "55926-0015",
        "units": 2,
        "total": 122.63,
        "returned": false
      }
    }
  }, {
    "id": 6,
    "date": "4/6/2020",
    "reference": "0264-1940",
    "customer": "Burt Palmby",
    "NB_items": "19-887-7899",
    "total": 343.0,
    "person": {
      "first_name": "Burt",
      "last_name": "Palmby",
      "gender": "Male",
      "email": "bpalmby5@reference.com",
      "address": "7 Old Shore Way",
      "order": {
        "order_no": "68703-008",
        "units": 3,
        "total": 289.07,
        "returned": true
      }
    }
  }, {
    "id": 7,
    "date": "9/30/2019",
    "reference": "37808-244",
    "customer": "Humfrey Eick",
    "NB_items": "15-974-6568",
    "total": 174.1,
    "person": {
      "first_name": "Humfrey",
      "last_name": "Eick",
      "gender": "Male",
      "email": "heick6@google.cn",
      "address": "327 Old Gate Park",
      "zip_code": "7875-254",
      "order": {
        "order_no": "61601-0080",
        "units": 2,
        "total": 74.29,
        "returned": false
      }
    }
  }, {
    "id": 8,
    "date": "6/1/2019",
    "reference": "65044-0789",
    "customer": "Clayson Willingham",
    "NB_items": "37-519-7148",
    "total": 128.41,
    "person": {
      "first_name": "Clayson",
      "last_name": "Willingham",
      "gender": "Male",
      "email": "cwillingham7@google.fr",
      "address": "96 Reinke Circle",
      "order": {
        "order_no": "49999-646",
        "units": 3,
        "total": 429.79,
        "returned": false
      }
    }
  }, {
    "id": 9,
    "date": "4/12/2020",
    "reference": "0268-0110",
    "customer": "Mallory Sharratt",
    "NB_items": "79-809-9453",
    "total": 40.84,
    "person": {
      "first_name": "Mallory",
      "last_name": "Sharratt",
      "gender": "Male",
      "email": "msharratt8@arizona.edu",
      "address": "1 Oak Way",
      "order": {
        "order_no": "0268-1460",
        "units": 5,
        "total": 263.54,
        "returned": true
      }
    }
  }, {
    "id": 10,
    "date": "2/28/2020",
    "reference": "51386-737",
    "customer": "Welch Bentall",
    "NB_items": "34-044-9543",
    "total": 181.47,
    "person": {
      "first_name": "Welch",
      "last_name": "Bentall",
      "gender": "Male",
      "email": "wbentall9@abc.net.au",
      "address": "517 Fairfield Street",
      "zip_code": "7460-005",
      "order": {
        "order_no": "51849-1250",
        "units": 3,
        "total": 245.05,
        "returned": true
      }
    }
  }, {
    "id": 11,
    "date": "11/29/2019",
    "reference": "0781-6202",
    "customer": "Astrix Manass",
    "NB_items": "34-705-9681",
    "total": 176.29,
    "person": {
      "first_name": "Astrix",
      "last_name": "Manass",
      "gender": "Female",
      "email": "amanassa@ted.com",
      "address": "1916 Hanson Pass",
      "order": {
        "order_no": "55910-396",
        "units": 4,
        "total": 492.97,
        "returned": false
      }
    }
  }, {
    "id": 12,
    "date": "2/27/2020",
    "reference": "45802-182",
    "customer": "Nelie McKirdy",
    "NB_items": "75-723-1005",
    "total": 330.18,
    "person": {
      "first_name": "Nelie",
      "last_name": "McKirdy",
      "gender": "Female",
      "email": "nmckirdyb@aol.com",
      "address": "07364 Hollow Ridge Junction",
      "order": {
        "order_no": "0310-0280",
        "units": 2,
        "total": 219.0,
        "returned": true
      }
    }
  }, {
    "id": 13,
    "date": "9/23/2019",
    "reference": "57520-0300",
    "customer": "Trenton Geard",
    "NB_items": "82-247-9664",
    "total": 360.55,
    "person": {
      "first_name": "Trenton",
      "last_name": "Geard",
      "gender": "Male",
      "email": "tgeardc@uiuc.edu",
      "address": "19 Kenwood Court",
      "zip_code": "82-505",
      "order": {
        "order_no": "51079-379",
        "units": 5,
        "total": 109.16,
        "returned": true
      }
    }
  }, {
    "id": 14,
    "date": "5/6/2019",
    "reference": "10096-0306",
    "customer": "Eldon Missington",
    "NB_items": "77-084-2624",
    "total": 162.4,
    "person": {
      "first_name": "Eldon",
      "last_name": "Missington",
      "gender": "Male",
      "email": "emissingtond@nifty.com",
      "address": "81 Clarendon Junction",
      "zip_code": "357247",
      "order": {
        "order_no": "0641-0493",
        "units": 2,
        "total": 365.7,
        "returned": false
      }
    }
  }, {
    "id": 15,
    "date": "7/8/2019",
    "reference": "10544-106",
    "customer": "Jameson Lanphier",
    "NB_items": "22-473-9693",
    "total": 356.99,
    "person": {
      "first_name": "Jameson",
      "last_name": "Lanphier",
      "gender": "Male",
      "email": "jlanphiere@nsw.gov.au",
      "address": "87 Riverside Crossing",
      "zip_code": "571 92",
      "order": {
        "order_no": "53329-970",
        "units": 5,
        "total": 337.3,
        "returned": false
      }
    }
  }, {
    "id": 16,
    "date": "3/29/2020",
    "reference": "49288-0072",
    "customer": "Ronnie Magenny",
    "NB_items": "14-219-6619",
    "total": 101.91,
    "person": {
      "first_name": "Ronnie",
      "last_name": "Magenny",
      "gender": "Female",
      "email": "rmagennyf@mysql.com",
      "address": "35240 Emmet Way",
      "zip_code": "26000",
      "order": {
        "order_no": "59779-707",
        "units": 4,
        "total": 103.63,
        "returned": false
      }
    }
  }, {
    "id": 17,
    "date": "4/5/2020",
    "reference": "63323-659",
    "customer": "Jed Bour",
    "NB_items": "05-388-7068",
    "total": 493.56,
    "person": {
      "first_name": "Jed",
      "last_name": "Bour",
      "gender": "Male",
      "email": "jbourg@washingtonpost.com",
      "address": "3 Hauk Court",
      "order": {
        "order_no": "55154-3333",
        "units": 3,
        "total": 362.33,
        "returned": true
      }
    }
  }, {
    "id": 18,
    "date": "9/26/2019",
    "reference": "0258-3692",
    "customer": "Elton Scobie",
    "NB_items": "45-616-2197",
    "total": 29.11,
    "person": {
      "first_name": "Elton",
      "last_name": "Scobie",
      "gender": "Male",
      "email": "escobieh@godaddy.com",
      "address": "3191 Lakewood Gardens Hill",
      "order": {
        "order_no": "20276-051",
        "units": 4,
        "total": 166.84,
        "returned": true
      }
    }
  }, {
    "id": 19,
    "date": "8/3/2019",
    "reference": "0135-0460",
    "customer": "Gabriel Fitzsimon",
    "NB_items": "78-245-7737",
    "total": 26.72,
    "person": {
      "first_name": "Gabriel",
      "last_name": "Fitzsimon",
      "gender": "Female",
      "email": "gfitzsimoni@chicagotribune.com",
      "address": "1660 Susan Center",
      "zip_code": "20535",
      "order": {
        "order_no": "49967-593",
        "units": 3,
        "total": 227.09,
        "returned": false
      }
    }
  }, {
    "id": 20,
    "date": "2/29/2020",
    "reference": "0268-6636",
    "customer": "Lilla Coghlan",
    "NB_items": "07-729-1370",
    "total": 211.45,
    "person": {
      "first_name": "Lilla",
      "last_name": "Coghlan",
      "gender": "Female",
      "email": "lcoghlanj@accuweather.com",
      "address": "52 Northview Pass",
      "zip_code": "93650",
      "order": {
        "order_no": "68016-089",
        "units": 1,
        "total": 108.36,
        "returned": false
      }
    }
  }, {
    "id": 21,
    "date": "8/27/2019",
    "reference": "50458-306",
    "customer": "Adolphus Dungay",
    "NB_items": "87-062-8084",
    "total": 140.24,
    "person": {
      "first_name": "Adolphus",
      "last_name": "Dungay",
      "gender": "Male",
      "email": "adungayk@nature.com",
      "address": "20605 Maywood Place",
      "zip_code": "6109",
      "order": {
        "order_no": "55154-4511",
        "units": 4,
        "total": 362.57,
        "returned": false
      }
    }
  }, {
    "id": 22,
    "date": "7/9/2019",
    "reference": "45802-237",
    "customer": "Rex Bartholomew",
    "NB_items": "85-695-0193",
    "total": 233.65,
    "person": {
      "first_name": "Rex",
      "last_name": "Bartholomew",
      "gender": "Male",
      "email": "rbartholomewl@shareasale.com",
      "address": "5925 Scott Hill",
      "order": {
        "order_no": "0944-4201",
        "units": 4,
        "total": 85.36,
        "returned": false
      }
    }
  }, {
    "id": 23,
    "date": "4/18/2019",
    "reference": "43063-257",
    "customer": "Harvey Birmingham",
    "NB_items": "00-073-8968",
    "total": 27.18,
    "person": {
      "first_name": "Harvey",
      "last_name": "Birmingham",
      "gender": "Male",
      "email": "hbirminghamm@pbs.org",
      "address": "1545 Hoffman Park",
      "zip_code": "20404",
      "order": {
        "order_no": "24385-364",
        "units": 1,
        "total": 422.64,
        "returned": true
      }
    }
  }, {
    "id": 24,
    "date": "7/18/2019",
    "reference": "0781-5188",
    "customer": "Sammy Burghill",
    "NB_items": "31-759-1650",
    "total": 269.27,
    "person": {
      "first_name": "Sammy",
      "last_name": "Burghill",
      "gender": "Male",
      "email": "sburghilln@google.com.hk",
      "address": "485 Trailsway Place",
      "order": {
        "order_no": "41250-468",
        "units": 5,
        "total": 62.6,
        "returned": false
      }
    }
  }, {
    "id": 25,
    "date": "5/20/2019",
    "reference": "55154-8387",
    "customer": "Britni Woodstock",
    "NB_items": "36-118-4376",
    "total": 98.23,
    "person": {
      "first_name": "Britni",
      "last_name": "Woodstock",
      "gender": "Female",
      "email": "bwoodstocko@businessweek.com",
      "address": "8440 New Castle Road",
      "zip_code": "626190",
      "order": {
        "order_no": "65044-5100",
        "units": 4,
        "total": 146.11,
        "returned": false
      }
    }
  }, {
    "id": 26,
    "date": "3/22/2020",
    "reference": "68788-9832",
    "customer": "Cam Trineman",
    "NB_items": "85-696-2577",
    "total": 474.25,
    "person": {
      "first_name": "Cam",
      "last_name": "Trineman",
      "gender": "Female",
      "email": "ctrinemanp@ucoz.ru",
      "address": "84538 Sutherland Park",
      "order": {
        "order_no": "56062-590",
        "units": 3,
        "total": 24.21,
        "returned": true
      }
    }
  }, {
    "id": 27,
    "date": "1/18/2020",
    "reference": "63148-330",
    "customer": "Romain Blencoe",
    "NB_items": "35-226-5949",
    "total": 29.82,
    "person": {
      "first_name": "Romain",
      "last_name": "Blencoe",
      "gender": "Male",
      "email": "rblencoeq@google.com",
      "address": "46031 Forest Run Point",
      "zip_code": "3505-143",
      "order": {
        "order_no": "0049-2750",
        "units": 2,
        "total": 222.94,
        "returned": true
      }
    }
  }, {
    "id": 28,
    "date": "1/1/2020",
    "reference": "65224-545",
    "customer": "Gerek Peyton",
    "NB_items": "20-690-4044",
    "total": 121.38,
    "person": {
      "first_name": "Gerek",
      "last_name": "Peyton",
      "gender": "Male",
      "email": "gpeytonr@ucoz.com",
      "address": "028 Melrose Way",
      "zip_code": "27-552",
      "order": {
        "order_no": "67751-009",
        "units": 1,
        "total": 384.36,
        "returned": true
      }
    }
  }, {
    "id": 29,
    "date": "2/25/2020",
    "reference": "0615-7716",
    "customer": "Anselm Tinmouth",
    "NB_items": "62-728-5803",
    "total": 457.39,
    "person": {
      "first_name": "Anselm",
      "last_name": "Tinmouth",
      "gender": "Male",
      "email": "atinmouths@cnbc.com",
      "address": "9 Saint Paul Park",
      "order": {
        "order_no": "49999-692",
        "units": 3,
        "total": 299.5,
        "returned": true
      }
    }
  }, {
    "id": 30,
    "date": "3/23/2020",
    "reference": "0187-5465",
    "customer": "Cassey Cubley",
    "NB_items": "45-551-6139",
    "total": 259.26,
    "person": {
      "first_name": "Cassey",
      "last_name": "Cubley",
      "gender": "Female",
      "email": "ccubleyt@amazon.co.uk",
      "address": "6 Melby Trail",
      "zip_code": "87-148",
      "order": {
        "order_no": "55648-728",
        "units": 4,
        "total": 136.53,
        "returned": false
      }
    }
  }, {
    "id": 31,
    "date": "3/27/2020",
    "reference": "48433-311",
    "customer": "Carlin Chastand",
    "NB_items": "93-276-6379",
    "total": 19.76,
    "person": {
      "first_name": "Carlin",
      "last_name": "Chastand",
      "gender": "Male",
      "email": "cchastandu@vimeo.com",
      "address": "971 Fisk Parkway",
      "zip_code": "L4K",
      "order": {
        "order_no": "54569-1524",
        "units": 2,
        "total": 43.32,
        "returned": true
      }
    }
  }, {
    "id": 32,
    "date": "8/27/2019",
    "reference": "68599-6110",
    "customer": "Monika Hoyes",
    "NB_items": "96-659-3230",
    "total": 233.38,
    "person": {
      "first_name": "Monika",
      "last_name": "Hoyes",
      "gender": "Female",
      "email": "mhoyesv@wisc.edu",
      "address": "04127 Maywood Road",
      "zip_code": "42-310",
      "order": {
        "order_no": "51815-223",
        "units": 1,
        "total": 287.26,
        "returned": true
      }
    }
  }, {
    "id": 33,
    "date": "6/11/2019",
    "reference": "30142-080",
    "customer": "Mick Goldring",
    "NB_items": "61-012-5560",
    "total": 44.86,
    "person": {
      "first_name": "Mick",
      "last_name": "Goldring",
      "gender": "Male",
      "email": "mgoldringw@wikispaces.com",
      "address": "57324 Oneill Park",
      "zip_code": "424 10",
      "order": {
        "order_no": "68788-0598",
        "units": 4,
        "total": 345.41,
        "returned": false
      }
    }
  }, {
    "id": 34,
    "date": "5/15/2019",
    "reference": "44911-0073",
    "customer": "Renee Nuton",
    "NB_items": "45-832-2837",
    "total": 81.11,
    "person": {
      "first_name": "Renee",
      "last_name": "Nuton",
      "gender": "Female",
      "email": "rnutonx@dion.ne.jp",
      "address": "1981 Bashford Drive",
      "zip_code": "17011",
      "order": {
        "order_no": "0024-0337",
        "units": 3,
        "total": 139.27,
        "returned": true
      }
    }
  }, {
    "id": 35,
    "date": "3/31/2020",
    "reference": "63323-475",
    "customer": "Lyell Gurry",
    "NB_items": "66-887-7496",
    "total": 158.21,
    "person": {
      "first_name": "Lyell",
      "last_name": "Gurry",
      "gender": "Male",
      "email": "lgurryy@gizmodo.com",
      "address": "3485 Maryland Court",
      "zip_code": "18-105",
      "order": {
        "order_no": "36987-2117",
        "units": 3,
        "total": 416.98,
        "returned": false
      }
    }
  }, {
    "id": 36,
    "date": "9/30/2019",
    "reference": "41520-590",
    "customer": "Walther Lye",
    "NB_items": "64-737-1157",
    "total": 137.04,
    "person": {
      "first_name": "Walther",
      "last_name": "Lye",
      "gender": "Male",
      "email": "wlyez@wix.com",
      "address": "84178 Lyons Plaza",
      "zip_code": "63-001",
      "order": {
        "order_no": "57520-0636",
        "units": 4,
        "total": 163.65,
        "returned": false
      }
    }
  }, {
    "id": 37,
    "date": "2/7/2020",
    "reference": "63323-315",
    "customer": "Maurie Antonazzi",
    "NB_items": "79-166-4470",
    "total": 403.11,
    "person": {
      "first_name": "Maurie",
      "last_name": "Antonazzi",
      "gender": "Male",
      "email": "mantonazzi10@imgur.com",
      "address": "8 Oak Alley",
      "zip_code": "24-170",
      "order": {
        "order_no": "68788-9413",
        "units": 4,
        "total": 450.98,
        "returned": false
      }
    }
  }, {
    "id": 38,
    "date": "10/20/2019",
    "reference": "55154-4876",
    "customer": "Leicester Andri",
    "NB_items": "01-500-1993",
    "total": 83.5,
    "person": {
      "first_name": "Leicester",
      "last_name": "Andri",
      "gender": "Male",
      "email": "landri11@adobe.com",
      "address": "0 Gale Circle",
      "order": {
        "order_no": "42291-392",
        "units": 1,
        "total": 72.31,
        "returned": true
      }
    }
  }, {
    "id": 39,
    "date": "3/30/2020",
    "reference": "59779-666",
    "customer": "Care Harkus",
    "NB_items": "74-554-3720",
    "total": 260.67,
    "person": {
      "first_name": "Care",
      "last_name": "Harkus",
      "gender": "Male",
      "email": "charkus12@globo.com",
      "address": "22 Barnett Parkway",
      "zip_code": "592 55",
      "order": {
        "order_no": "98132-147",
        "units": 1,
        "total": 232.48,
        "returned": false
      }
    }
  }, {
    "id": 40,
    "date": "1/17/2020",
    "reference": "58177-312",
    "customer": "Cathie Corneck",
    "NB_items": "48-189-7810",
    "total": 241.6,
    "person": {
      "first_name": "Cathie",
      "last_name": "Corneck",
      "gender": "Female",
      "email": "ccorneck13@plala.or.jp",
      "address": "3137 Texas Plaza",
      "zip_code": "828 25",
      "order": {
        "order_no": "36987-1713",
        "units": 4,
        "total": 84.98,
        "returned": true
      }
    }
  }, {
    "id": 41,
    "date": "8/14/2019",
    "reference": "58668-2581",
    "customer": "Madelin Dotterill",
    "NB_items": "42-008-9500",
    "total": 466.59,
    "person": {
      "first_name": "Madelin",
      "last_name": "Dotterill",
      "gender": "Female",
      "email": "mdotterill14@java.com",
      "address": "79 Vahlen Hill",
      "zip_code": "11480",
      "order": {
        "order_no": "59663-110",
        "units": 1,
        "total": 422.27,
        "returned": true
      }
    }
  }, {
    "id": 42,
    "date": "5/3/2019",
    "reference": "52685-391",
    "customer": "Gavin McGeachy",
    "NB_items": "47-566-7844",
    "total": 192.77,
    "person": {
      "first_name": "Gavin",
      "last_name": "McGeachy",
      "gender": "Male",
      "email": "gmcgeachy15@mozilla.org",
      "address": "32 Esch Center",
      "zip_code": "21051 CEDEX",
      "order": {
        "order_no": "50268-098",
        "units": 1,
        "total": 388.18,
        "returned": true
      }
    }
  }, {
    "id": 43,
    "date": "10/18/2019",
    "reference": "0024-0610",
    "customer": "Abram Llopis",
    "NB_items": "78-100-9993",
    "total": 336.0,
    "person": {
      "first_name": "Abram",
      "last_name": "Llopis",
      "gender": "Male",
      "email": "allopis16@360.cn",
      "address": "386 Hoffman Lane",
      "zip_code": "88827",
      "order": {
        "order_no": "63739-284",
        "units": 1,
        "total": 435.42,
        "returned": true
      }
    }
  }, {
    "id": 44,
    "date": "5/26/2019",
    "reference": "53077-2001",
    "customer": "Stephen Chatainier",
    "NB_items": "70-817-2261",
    "total": 422.61,
    "person": {
      "first_name": "Stephen",
      "last_name": "Chatainier",
      "gender": "Male",
      "email": "schatainier17@geocities.com",
      "address": "43264 Dawn Drive",
      "zip_code": "99-314",
      "order": {
        "order_no": "76439-136",
        "units": 1,
        "total": 407.04,
        "returned": true
      }
    }
  }, {
    "id": 45,
    "date": "8/4/2019",
    "reference": "54868-5074",
    "customer": "Menard Tancock",
    "NB_items": "19-201-2319",
    "total": 122.84,
    "person": {
      "first_name": "Menard",
      "last_name": "Tancock",
      "gender": "Male",
      "email": "mtancock18@berkeley.edu",
      "address": "6 East Center",
      "order": {
        "order_no": "48951-3145",
        "units": 1,
        "total": 365.28,
        "returned": true
      }
    }
  }, {
    "id": 46,
    "date": "10/13/2019",
    "reference": "36987-1135",
    "customer": "Carole Grzes",
    "NB_items": "35-098-3296",
    "total": 462.65,
    "person": {
      "first_name": "Carole",
      "last_name": "Grzes",
      "gender": "Female",
      "email": "cgrzes19@ocn.ne.jp",
      "address": "2551 Riverside Park",
      "zip_code": "01004 CEDEX",
      "order": {
        "order_no": "49349-878",
        "units": 2,
        "total": 121.81,
        "returned": false
      }
    }
  }, {
    "id": 47,
    "date": "2/28/2020",
    "reference": "58411-199",
    "customer": "Netti Folkerts",
    "NB_items": "68-657-1228",
    "total": 437.86,
    "person": {
      "first_name": "Netti",
      "last_name": "Folkerts",
      "gender": "Female",
      "email": "nfolkerts1a@virginia.edu",
      "address": "334 Eliot Terrace",
      "zip_code": "V9P",
      "order": {
        "order_no": "25373-011",
        "units": 4,
        "total": 350.91,
        "returned": true
      }
    }
  }, {
    "id": 48,
    "date": "7/15/2019",
    "reference": "68391-321",
    "customer": "Latia Alford",
    "NB_items": "57-546-4405",
    "total": 314.91,
    "person": {
      "first_name": "Latia",
      "last_name": "Alford",
      "gender": "Female",
      "email": "lalford1b@berkeley.edu",
      "address": "1 Holy Cross Park",
      "zip_code": "19700-000",
      "order": {
        "order_no": "49348-778",
        "units": 4,
        "total": 416.66,
        "returned": false
      }
    }
  }, {
    "id": 49,
    "date": "1/5/2020",
    "reference": "0113-0998",
    "customer": "Krystle Letham",
    "NB_items": "88-153-5965",
    "total": 343.77,
    "person": {
      "first_name": "Krystle",
      "last_name": "Letham",
      "gender": "Female",
      "email": "kletham1c@mapquest.com",
      "address": "54 Lakewood Gardens Trail",
      "order": {
        "order_no": "52083-622",
        "units": 5,
        "total": 207.27,
        "returned": false
      }
    }
  }, {
    "id": 50,
    "date": "6/16/2019",
    "reference": "43419-711",
    "customer": "Osbourne Baskeyfield",
    "NB_items": "12-624-8228",
    "total": 472.92,
    "person": {
      "first_name": "Osbourne",
      "last_name": "Baskeyfield",
      "gender": "Male",
      "email": "obaskeyfield1d@weebly.com",
      "address": "48865 Chinook Way",
      "zip_code": "353187",
      "order": {
        "order_no": "52584-482",
        "units": 4,
        "total": 339.66,
        "returned": true
      }
    }
  }, {
    "id": 51,
    "date": "3/13/2020",
    "reference": "11084-175",
    "customer": "Sibella Wheater",
    "NB_items": "61-865-4030",
    "total": 438.19,
    "person": {
      "first_name": "Sibella",
      "last_name": "Wheater",
      "gender": "Female",
      "email": "swheater1e@google.ca",
      "address": "5939 Donald Plaza",
      "zip_code": "36408",
      "order": {
        "order_no": "58593-800",
        "units": 2,
        "total": 132.18,
        "returned": false
      }
    }
  }, {
    "id": 52,
    "date": "12/16/2019",
    "reference": "0069-2590",
    "customer": "Ulberto Raoux",
    "NB_items": "81-336-0275",
    "total": 144.58,
    "person": {
      "first_name": "Ulberto",
      "last_name": "Raoux",
      "gender": "Male",
      "email": "uraoux1f@hc360.com",
      "address": "350 Lukken Hill",
      "zip_code": "L-9776",
      "order": {
        "order_no": "0002-3250",
        "units": 3,
        "total": 205.41,
        "returned": true
      }
    }
  }, {
    "id": 53,
    "date": "9/13/2019",
    "reference": "24286-1563",
    "customer": "Janina Iacobucci",
    "NB_items": "80-681-1786",
    "total": 130.91,
    "person": {
      "first_name": "Janina",
      "last_name": "Iacobucci",
      "gender": "Female",
      "email": "jiacobucci1g@altervista.org",
      "address": "775 Oak Valley Park",
      "order": {
        "order_no": "52584-476",
        "units": 2,
        "total": 184.66,
        "returned": true
      }
    }
  }, {
    "id": 54,
    "date": "10/10/2019",
    "reference": "52773-237",
    "customer": "Craggy Feares",
    "NB_items": "84-829-9893",
    "total": 172.7,
    "person": {
      "first_name": "Craggy",
      "last_name": "Feares",
      "gender": "Male",
      "email": "cfeares1h@cocolog-nifty.com",
      "address": "39 Everett Pass",
      "zip_code": "691 05",
      "order": {
        "order_no": "0179-0083",
        "units": 3,
        "total": 333.6,
        "returned": true
      }
    }
  }, {
    "id": 55,
    "date": "10/23/2019",
    "reference": "58468-0070",
    "customer": "Gherardo Castelain",
    "NB_items": "71-100-2500",
    "total": 200.92,
    "person": {
      "first_name": "Gherardo",
      "last_name": "Castelain",
      "gender": "Male",
      "email": "gcastelain1i@reddit.com",
      "address": "230 Schurz Pass",
      "order": {
        "order_no": "30142-401",
        "units": 3,
        "total": 33.12,
        "returned": false
      }
    }
  }, {
    "id": 56,
    "date": "10/19/2019",
    "reference": "49035-321",
    "customer": "Manolo Purdey",
    "NB_items": "28-590-5697",
    "total": 59.02,
    "person": {
      "first_name": "Manolo",
      "last_name": "Purdey",
      "gender": "Male",
      "email": "mpurdey1j@bbb.org",
      "address": "5 Golf Parkway",
      "order": {
        "order_no": "64205-745",
        "units": 1,
        "total": 183.41,
        "returned": true
      }
    }
  }, {
    "id": 57,
    "date": "2/5/2020",
    "reference": "58118-0518",
    "customer": "Arvy Seymark",
    "NB_items": "12-150-4351",
    "total": 24.17,
    "person": {
      "first_name": "Arvy",
      "last_name": "Seymark",
      "gender": "Male",
      "email": "aseymark1k@bbc.co.uk",
      "address": "55441 Heath Street",
      "order": {
        "order_no": "58980-335",
        "units": 2,
        "total": 296.12,
        "returned": false
      }
    }
  }, {
    "id": 58,
    "date": "5/7/2019",
    "reference": "62802-222",
    "customer": "Constanta Ricards",
    "NB_items": "29-976-7816",
    "total": 157.92,
    "person": {
      "first_name": "Constanta",
      "last_name": "Ricards",
      "gender": "Female",
      "email": "cricards1l@paypal.com",
      "address": "78 Emmet Street",
      "zip_code": "7300",
      "order": {
        "order_no": "54868-5770",
        "units": 1,
        "total": 25.01,
        "returned": true
      }
    }
  }, {
    "id": 59,
    "date": "11/11/2019",
    "reference": "0409-8061",
    "customer": "Averyl Clyde",
    "NB_items": "03-937-7190",
    "total": 472.55,
    "person": {
      "first_name": "Averyl",
      "last_name": "Clyde",
      "gender": "Female",
      "email": "aclyde1m@joomla.org",
      "address": "7 Anzinger Parkway",
      "order": {
        "order_no": "55289-039",
        "units": 4,
        "total": 111.48,
        "returned": false
      }
    }
  }, {
    "id": 60,
    "date": "8/20/2019",
    "reference": "41520-282",
    "customer": "Nadya Wilton",
    "NB_items": "81-406-3066",
    "total": 125.42,
    "person": {
      "first_name": "Nadya",
      "last_name": "Wilton",
      "gender": "Female",
      "email": "nwilton1n@springer.com",
      "address": "00 Drewry Street",
      "zip_code": "622012",
      "order": {
        "order_no": "47682-010",
        "units": 3,
        "total": 177.04,
        "returned": false
      }
    }
  }, {
    "id": 61,
    "date": "9/27/2019",
    "reference": "55154-6298",
    "customer": "Faith MacCheyne",
    "NB_items": "10-939-5846",
    "total": 316.63,
    "person": {
      "first_name": "Faith",
      "last_name": "MacCheyne",
      "gender": "Female",
      "email": "fmaccheyne1o@utexas.edu",
      "address": "4612 Bay Hill",
      "order": {
        "order_no": "49349-341",
        "units": 3,
        "total": 495.0,
        "returned": false
      }
    }
  }, {
    "id": 62,
    "date": "7/11/2019",
    "reference": "51862-156",
    "customer": "Dyanne Maunsell",
    "NB_items": "40-883-1462",
    "total": 50.24,
    "person": {
      "first_name": "Dyanne",
      "last_name": "Maunsell",
      "gender": "Female",
      "email": "dmaunsell1p@gmpg.org",
      "address": "2311 Shasta Place",
      "zip_code": "59604 CEDEX",
      "order": {
        "order_no": "16714-385",
        "units": 1,
        "total": 84.76,
        "returned": false
      }
    }
  }, {
    "id": 63,
    "date": "1/9/2020",
    "reference": "44087-1114",
    "customer": "Wendall Lapley",
    "NB_items": "05-726-0822",
    "total": 208.22,
    "person": {
      "first_name": "Wendall",
      "last_name": "Lapley",
      "gender": "Male",
      "email": "wlapley1q@latimes.com",
      "address": "7800 Miller Junction",
      "order": {
        "order_no": "61657-0973",
        "units": 3,
        "total": 418.15,
        "returned": false
      }
    }
  }, {
    "id": 64,
    "date": "12/20/2019",
    "reference": "10812-950",
    "customer": "Theodosia Gainsford",
    "NB_items": "32-000-4965",
    "total": 441.2,
    "person": {
      "first_name": "Theodosia",
      "last_name": "Gainsford",
      "gender": "Female",
      "email": "tgainsford1r@cam.ac.uk",
      "address": "774 Mitchell Drive",
      "order": {
        "order_no": "51079-974",
        "units": 1,
        "total": 188.63,
        "returned": true
      }
    }
  }, {
    "id": 65,
    "date": "2/23/2020",
    "reference": "0178-0101",
    "customer": "Lemmy Woodberry",
    "NB_items": "83-256-5894",
    "total": 248.5,
    "person": {
      "first_name": "Lemmy",
      "last_name": "Woodberry",
      "gender": "Male",
      "email": "lwoodberry1s@storify.com",
      "address": "349 Service Parkway",
      "zip_code": "76086 CEDEX",
      "order": {
        "order_no": "49230-203",
        "units": 2,
        "total": 238.66,
        "returned": true
      }
    }
  }, {
    "id": 66,
    "date": "11/26/2019",
    "reference": "36800-886",
    "customer": "Olivie McCullum",
    "NB_items": "35-582-1782",
    "total": 448.64,
    "person": {
      "first_name": "Olivie",
      "last_name": "McCullum",
      "gender": "Female",
      "email": "omccullum1t@cpanel.net",
      "address": "5 Hooker Court",
      "zip_code": "2425",
      "order": {
        "order_no": "51346-127",
        "units": 1,
        "total": 292.77,
        "returned": true
      }
    }
  }, {
    "id": 67,
    "date": "7/4/2019",
    "reference": "98132-890",
    "customer": "Stefanie Brauninger",
    "NB_items": "18-107-3408",
    "total": 138.08,
    "person": {
      "first_name": "Stefanie",
      "last_name": "Brauninger",
      "gender": "Female",
      "email": "sbrauninger1u@surveymonkey.com",
      "address": "1 Arkansas Drive",
      "order": {
        "order_no": "69043-001",
        "units": 5,
        "total": 32.56,
        "returned": true
      }
    }
  }, {
    "id": 68,
    "date": "9/30/2019",
    "reference": "54868-3155",
    "customer": "Svend Stork",
    "NB_items": "85-308-6428",
    "total": 279.98,
    "person": {
      "first_name": "Svend",
      "last_name": "Stork",
      "gender": "Male",
      "email": "sstork1v@utexas.edu",
      "address": "65865 Transport Alley",
      "order": {
        "order_no": "0069-3220",
        "units": 4,
        "total": 406.82,
        "returned": false
      }
    }
  }, {
    "id": 69,
    "date": "2/4/2020",
    "reference": "55714-4549",
    "customer": "Michele Sciacovelli",
    "NB_items": "25-556-7339",
    "total": 208.47,
    "person": {
      "first_name": "Michele",
      "last_name": "Sciacovelli",
      "gender": "Male",
      "email": "msciacovelli1w@tmall.com",
      "address": "56 Bellgrove Street",
      "zip_code": "441 28",
      "order": {
        "order_no": "76000-375",
        "units": 5,
        "total": 168.88,
        "returned": false
      }
    }
  }, {
    "id": 70,
    "date": "12/19/2019",
    "reference": "68084-078",
    "customer": "Cindelyn Faireclough",
    "NB_items": "54-463-1237",
    "total": 214.91,
    "person": {
      "first_name": "Cindelyn",
      "last_name": "Faireclough",
      "gender": "Female",
      "email": "cfaireclough1x@aol.com",
      "address": "43 Schmedeman Park",
      "zip_code": "1259",
      "order": {
        "order_no": "49999-077",
        "units": 3,
        "total": 19.66,
        "returned": false
      }
    }
  }, {
    "id": 71,
    "date": "6/9/2019",
    "reference": "66472-040",
    "customer": "Chastity Bengtsson",
    "NB_items": "85-127-5289",
    "total": 201.9,
    "person": {
      "first_name": "Chastity",
      "last_name": "Bengtsson",
      "gender": "Female",
      "email": "cbengtsson1y@barnesandnoble.com",
      "address": "893 Orin Trail",
      "order": {
        "order_no": "42291-305",
        "units": 2,
        "total": 184.17,
        "returned": true
      }
    }
  }, {
    "id": 72,
    "date": "1/5/2020",
    "reference": "55154-7352",
    "customer": "Hewe Lieber",
    "NB_items": "57-805-8961",
    "total": 275.15,
    "person": {
      "first_name": "Hewe",
      "last_name": "Lieber",
      "gender": "Male",
      "email": "hlieber1z@opensource.org",
      "address": "29 Schlimgen Street",
      "zip_code": "686029",
      "order": {
        "order_no": "76206-002",
        "units": 4,
        "total": 421.25,
        "returned": true
      }
    }
  }, {
    "id": 73,
    "date": "10/12/2019",
    "reference": "49348-019",
    "customer": "Claiborne Fiddymont",
    "NB_items": "32-654-4479",
    "total": 264.43,
    "person": {
      "first_name": "Claiborne",
      "last_name": "Fiddymont",
      "gender": "Male",
      "email": "cfiddymont20@businessinsider.com",
      "address": "2 Eliot Way",
      "zip_code": "152240",
      "order": {
        "order_no": "52125-245",
        "units": 4,
        "total": 146.59,
        "returned": false
      }
    }
  }, {
    "id": 74,
    "date": "7/24/2019",
    "reference": "65044-1703",
    "customer": "Nickie Clemo",
    "NB_items": "81-211-9730",
    "total": 93.27,
    "person": {
      "first_name": "Nickie",
      "last_name": "Clemo",
      "gender": "Male",
      "email": "nclemo21@usnews.com",
      "address": "7 Hanson Crossing",
      "order": {
        "order_no": "16590-087",
        "units": 5,
        "total": 104.65,
        "returned": true
      }
    }
  }, {
    "id": 75,
    "date": "5/19/2019",
    "reference": "68382-064",
    "customer": "Ulrika Leuty",
    "NB_items": "14-665-7450",
    "total": 95.19,
    "person": {
      "first_name": "Ulrika",
      "last_name": "Leuty",
      "gender": "Female",
      "email": "uleuty22@vinaora.com",
      "address": "95 Nova Center",
      "zip_code": "7646",
      "order": {
        "order_no": "22700-142",
        "units": 3,
        "total": 425.62,
        "returned": true
      }
    }
  }, {
    "id": 76,
    "date": "1/25/2020",
    "reference": "60977-144",
    "customer": "Morley Drew",
    "NB_items": "88-524-6854",
    "total": 259.49,
    "person": {
      "first_name": "Morley",
      "last_name": "Drew",
      "gender": "Male",
      "email": "mdrew23@nydailynews.com",
      "address": "34466 Packers Pass",
      "order": {
        "order_no": "63824-467",
        "units": 1,
        "total": 405.64,
        "returned": false
      }
    }
  }, {
    "id": 77,
    "date": "5/5/2019",
    "reference": "17518-028",
    "customer": "Marin Allsup",
    "NB_items": "83-076-4455",
    "total": 202.58,
    "person": {
      "first_name": "Marin",
      "last_name": "Allsup",
      "gender": "Female",
      "email": "mallsup24@oracle.com",
      "address": "50573 Oriole Plaza",
      "zip_code": "75370-000",
      "order": {
        "order_no": "46122-023",
        "units": 4,
        "total": 278.39,
        "returned": false
      }
    }
  }, {
    "id": 78,
    "date": "9/6/2019",
    "reference": "13537-162",
    "customer": "Evie Whitton",
    "NB_items": "52-095-3011",
    "total": 46.16,
    "person": {
      "first_name": "Evie",
      "last_name": "Whitton",
      "gender": "Female",
      "email": "ewhitton25@techcrunch.com",
      "address": "893 Manufacturers Court",
      "order": {
        "order_no": "54868-0922",
        "units": 2,
        "total": 106.84,
        "returned": true
      }
    }
  }, {
    "id": 79,
    "date": "11/8/2019",
    "reference": "68745-2040",
    "customer": "Nil Cadle",
    "NB_items": "18-548-6960",
    "total": 101.49,
    "person": {
      "first_name": "Nil",
      "last_name": "Cadle",
      "gender": "Male",
      "email": "ncadle26@lulu.com",
      "address": "90 Annamark Road",
      "zip_code": "8601",
      "order": {
        "order_no": "67777-130",
        "units": 5,
        "total": 459.28,
        "returned": false
      }
    }
  }, {
    "id": 80,
    "date": "10/23/2019",
    "reference": "68180-757",
    "customer": "Ivory Musso",
    "NB_items": "48-847-5732",
    "total": 130.36,
    "person": {
      "first_name": "Ivory",
      "last_name": "Musso",
      "gender": "Female",
      "email": "imusso27@xing.com",
      "address": "302 Grover Circle",
      "order": {
        "order_no": "21695-733",
        "units": 3,
        "total": 383.45,
        "returned": false
      }
    }
  }, {
    "id": 81,
    "date": "2/9/2020",
    "reference": "49738-950",
    "customer": "Martainn Wiggall",
    "NB_items": "81-071-5795",
    "total": 89.81,
    "person": {
      "first_name": "Martainn",
      "last_name": "Wiggall",
      "gender": "Male",
      "email": "mwiggall28@shinystat.com",
      "address": "818 Donald Court",
      "zip_code": "369-1872",
      "order": {
        "order_no": "63323-123",
        "units": 2,
        "total": 426.04,
        "returned": false
      }
    }
  }, {
    "id": 82,
    "date": "2/13/2020",
    "reference": "51672-1274",
    "customer": "Adan Carrell",
    "NB_items": "66-056-8652",
    "total": 459.59,
    "person": {
      "first_name": "Adan",
      "last_name": "Carrell",
      "gender": "Female",
      "email": "acarrell29@behance.net",
      "address": "3413 Evergreen Road",
      "zip_code": "165100",
      "order": {
        "order_no": "65342-0100",
        "units": 5,
        "total": 128.52,
        "returned": false
      }
    }
  }, {
    "id": 83,
    "date": "10/17/2019",
    "reference": "54575-199",
    "customer": "Bink Harbage",
    "NB_items": "50-929-9225",
    "total": 244.61,
    "person": {
      "first_name": "Bink",
      "last_name": "Harbage",
      "gender": "Male",
      "email": "bharbage2a@ihg.com",
      "address": "2826 International Lane",
      "zip_code": "456721",
      "order": {
        "order_no": "41163-329",
        "units": 2,
        "total": 477.53,
        "returned": false
      }
    }
  }, {
    "id": 84,
    "date": "6/22/2019",
    "reference": "50484-311",
    "customer": "Cherida Ivermee",
    "NB_items": "35-983-3302",
    "total": 188.09,
    "person": {
      "first_name": "Cherida",
      "last_name": "Ivermee",
      "gender": "Female",
      "email": "civermee2b@usgs.gov",
      "address": "30 Esch Road",
      "zip_code": "L-7794",
      "order": {
        "order_no": "0268-1472",
        "units": 3,
        "total": 440.67,
        "returned": false
      }
    }
  }, {
    "id": 85,
    "date": "5/5/2019",
    "reference": "48878-0620",
    "customer": "Jeremy Bengoechea",
    "NB_items": "40-214-0898",
    "total": 488.29,
    "person": {
      "first_name": "Jeremy",
      "last_name": "Bengoechea",
      "gender": "Male",
      "email": "jbengoechea2c@deviantart.com",
      "address": "3349 Gateway Avenue",
      "zip_code": "11805",
      "order": {
        "order_no": "62670-4832",
        "units": 4,
        "total": 110.38,
        "returned": false
      }
    }
  }, {
    "id": 86,
    "date": "2/29/2020",
    "reference": "24559-001",
    "customer": "Parrnell Pocke",
    "NB_items": "20-603-7470",
    "total": 310.73,
    "person": {
      "first_name": "Parrnell",
      "last_name": "Pocke",
      "gender": "Male",
      "email": "ppocke2d@spotify.com",
      "address": "2545 Bunting Junction",
      "order": {
        "order_no": "11344-379",
        "units": 2,
        "total": 330.93,
        "returned": true
      }
    }
  }, {
    "id": 87,
    "date": "10/19/2019",
    "reference": "37012-076",
    "customer": "Dolli Stoltz",
    "NB_items": "45-835-8797",
    "total": 155.75,
    "person": {
      "first_name": "Dolli",
      "last_name": "Stoltz",
      "gender": "Female",
      "email": "dstoltz2e@ebay.com",
      "address": "065 Crescent Oaks Circle",
      "order": {
        "order_no": "0078-0183",
        "units": 3,
        "total": 107.09,
        "returned": true
      }
    }
  }, {
    "id": 88,
    "date": "6/7/2019",
    "reference": "55648-763",
    "customer": "Marlin Drew",
    "NB_items": "00-991-6301",
    "total": 106.49,
    "person": {
      "first_name": "Marlin",
      "last_name": "Drew",
      "gender": "Male",
      "email": "mdrew2f@wufoo.com",
      "address": "4 Montana Crossing",
      "zip_code": "8707",
      "order": {
        "order_no": "43846-0034",
        "units": 1,
        "total": 173.27,
        "returned": false
      }
    }
  }, {
    "id": 89,
    "date": "5/30/2019",
    "reference": "0078-0365",
    "customer": "Guglielmo Gershom",
    "NB_items": "51-010-5090",
    "total": 414.62,
    "person": {
      "first_name": "Guglielmo",
      "last_name": "Gershom",
      "gender": "Male",
      "email": "ggershom2g@istockphoto.com",
      "address": "16877 Maywood Road",
      "order": {
        "order_no": "51151-000",
        "units": 4,
        "total": 483.25,
        "returned": false
      }
    }
  }, {
    "id": 90,
    "date": "2/19/2020",
    "reference": "42192-706",
    "customer": "Kiah Goddard",
    "NB_items": "46-400-4989",
    "total": 125.36,
    "person": {
      "first_name": "Kiah",
      "last_name": "Goddard",
      "gender": "Female",
      "email": "kgoddard2h@ycombinator.com",
      "address": "19651 Crest Line Junction",
      "zip_code": "197758",
      "order": {
        "order_no": "55301-468",
        "units": 4,
        "total": 388.77,
        "returned": false
      }
    }
  }, {
    "id": 91,
    "date": "2/16/2020",
    "reference": "61919-171",
    "customer": "Sasha Hamm",
    "NB_items": "58-420-1923",
    "total": 311.09,
    "person": {
      "first_name": "Sasha",
      "last_name": "Hamm",
      "gender": "Male",
      "email": "shamm2i@japanpost.jp",
      "address": "9260 Del Mar Road",
      "zip_code": "687509",
      "order": {
        "order_no": "11822-3801",
        "units": 5,
        "total": 391.47,
        "returned": true
      }
    }
  }, {
    "id": 92,
    "date": "12/23/2019",
    "reference": "49288-0781",
    "customer": "Anallise Norsworthy",
    "NB_items": "26-263-7915",
    "total": 67.95,
    "person": {
      "first_name": "Anallise",
      "last_name": "Norsworthy",
      "gender": "Female",
      "email": "anorsworthy2j@netscape.com",
      "address": "8432 Tennessee Avenue",
      "zip_code": "450049",
      "order": {
        "order_no": "62713-918",
        "units": 4,
        "total": 464.8,
        "returned": false
      }
    }
  }, {
    "id": 93,
    "date": "2/11/2020",
    "reference": "62011-0189",
    "customer": "Bail Caslett",
    "NB_items": "05-230-8795",
    "total": 205.18,
    "person": {
      "first_name": "Bail",
      "last_name": "Caslett",
      "gender": "Male",
      "email": "bcaslett2k@disqus.com",
      "address": "84 Fieldstone Alley",
      "zip_code": "13347",
      "order": {
        "order_no": "64942-1221",
        "units": 2,
        "total": 104.81,
        "returned": false
      }
    }
  }, {
    "id": 94,
    "date": "11/8/2019",
    "reference": "54473-131",
    "customer": "Genovera Wellfare",
    "NB_items": "66-935-3620",
    "total": 90.95,
    "person": {
      "first_name": "Genovera",
      "last_name": "Wellfare",
      "gender": "Female",
      "email": "gwellfare2l@msu.edu",
      "address": "9 Eastlawn Hill",
      "order": {
        "order_no": "55154-4734",
        "units": 1,
        "total": 31.06,
        "returned": false
      }
    }
  }, {
    "id": 95,
    "date": "3/7/2020",
    "reference": "41520-227",
    "customer": "Glenda Cyphus",
    "NB_items": "14-949-4709",
    "total": 495.26,
    "person": {
      "first_name": "Glenda",
      "last_name": "Cyphus",
      "gender": "Female",
      "email": "gcyphus2m@digg.com",
      "address": "5220 Old Shore Street",
      "order": {
        "order_no": "55289-967",
        "units": 5,
        "total": 212.64,
        "returned": true
      }
    }
  }, {
    "id": 96,
    "date": "4/23/2019",
    "reference": "67046-084",
    "customer": "Jeffie Callery",
    "NB_items": "74-321-3327",
    "total": 401.66,
    "person": {
      "first_name": "Jeffie",
      "last_name": "Callery",
      "gender": "Male",
      "email": "jcallery2n@networksolutions.com",
      "address": "997 Shopko Hill",
      "order": {
        "order_no": "0143-9939",
        "units": 2,
        "total": 25.02,
        "returned": false
      }
    }
  }, {
    "id": 97,
    "date": "1/20/2020",
    "reference": "52125-481",
    "customer": "Micheil Dunnion",
    "NB_items": "60-309-9101",
    "total": 264.61,
    "person": {
      "first_name": "Micheil",
      "last_name": "Dunnion",
      "gender": "Male",
      "email": "mdunnion2o@gizmodo.com",
      "address": "34368 Alpine Way",
      "zip_code": "981-3521",
      "order": {
        "order_no": "58232-0034",
        "units": 5,
        "total": 238.09,
        "returned": true
      }
    }
  }, {
    "id": 98,
    "date": "9/8/2019",
    "reference": "51079-950",
    "customer": "Daniella Brosh",
    "NB_items": "81-529-8294",
    "total": 494.73,
    "person": {
      "first_name": "Daniella",
      "last_name": "Brosh",
      "gender": "Female",
      "email": "dbrosh2p@netvibes.com",
      "address": "60032 Spaight Terrace",
      "order": {
        "order_no": "59726-117",
        "units": 5,
        "total": 58.47,
        "returned": false
      }
    }
  }, {
    "id": 99,
    "date": "10/29/2019",
    "reference": "69017-201",
    "customer": "Berthe Iacopetti",
    "NB_items": "83-235-9868",
    "total": 161.4,
    "person": {
      "first_name": "Berthe",
      "last_name": "Iacopetti",
      "gender": "Female",
      "email": "biacopetti2q@wikia.com",
      "address": "735 Stephen Drive",
      "zip_code": "361222",
      "order": {
        "order_no": "10096-0302",
        "units": 4,
        "total": 254.67,
        "returned": true
      }
    }
  }, {
    "id": 100,
    "date": "8/7/2019",
    "reference": "0179-0068",
    "customer": "Yorgo Solloway",
    "NB_items": "03-367-4585",
    "total": 114.8,
    "person": {
      "first_name": "Yorgo",
      "last_name": "Solloway",
      "gender": "Male",
      "email": "ysolloway2r@unesco.org",
      "address": "8864 Mcbride Lane",
      "zip_code": "6550",
      "order": {
        "order_no": "41616-220",
        "units": 1,
        "total": 82.96,
        "returned": false
      }
    }
  }]

  public salesRecordsSubject = new BehaviorSubject(this.sales);
  public salesRecords$ = this.salesRecordsSubject.asObservable()
      getOrdersArray() {
        return this.sales;
      }
      getSalesRecords() {
        return this.salesRecords$;
      }
}
