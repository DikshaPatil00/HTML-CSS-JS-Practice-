// json object
// it store data in a key and value format

let jsonObj={
    id:7,
    fname:"diksha",
    lname:"patil"
}

console.log(`
    ID             ::${jsonObj.id}
    first name     ::${jsonObj.fname}
    last name      ::${jsonObj.lname}
    
`);

// array of a object mostly used

let arrObj=[
    {
        id:7,
        fname:"diksha",
        lname:"patil",
        country:{
            cid:1,
            cname:"india"
        },
        month:['jan','feb','march'],
        result:[
            {
              subj:"m1",
              marks:"50"
            },
            {
              subj:"m2",
              marks:"60",
            },
            {
              subj:"m3",
              marks:"70", 
            }
        ]
    },
    {
        id:6,
        fname:"raj",
        lname:"rokde",
        country:{
            cid:2,
            cname:"usa"
        },
        month:['april','may','june'],
        result:[
            {
              subj:"m1",
              marks:"55"
            },
            {
              subj:"m2",
              marks:"66",
            },
            {
              subj:"m3",
              marks:"77", 
            }
        ]
    },
    {
        id:5,
        fname:"sanket",
        lname:"sonawane",
        country:{
            cid:3,
            cname:"korea"
        },
        month:['july','aug','sep'],
        result:[
            {
              subj:"m1",
              marks:"51"
            },
            {
              subj:"m2",
              marks:"61",
            },
            {
              subj:"m3",
              marks:"71", 
            }
        ]
    },
    {
        id:4,
        fname:"siddhesh",
        lname:"dusane",
        country:{
            cid:4,
            cname:"dubai"
        },
        month:['oct','nov','dec'],
        result:[
            {
              subj:"m1",
              marks:"53"
            },
            {
              subj:"m2",
              marks:"63",
            },
            {
              subj:"m3",
              marks:"73", 
            }
        ]
    }
];

for(let i=0;i<arrObj.length;i++){
    console.log(`
             ID          ::${arrObj[i].id}
             first name  ::${arrObj[i].fname}
             last name   ::${arrObj[i].lname}
             country     ::${arrObj[i].country.cname}
             month       ::${arrObj[i].month.join(" ")}

            ------------------result----------------------
        `);

    for(let j=0;j<arrObj[i].result.length;j++) {
        console.log(`
            subject       ::${arrObj[i].result[j].subj}
            marks         ::${arrObj[i].result[j].marks}
        `)
    }       
}





