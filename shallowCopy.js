const obj1 = {
    a:'a',
    b:'b',
    c:{
        d:"d",
        e:"e",
    },
    editA(){
        this.a = "AAAA";
    }
};

function isObject(subject){
    return typeof subject ==="object"
}

function isArray(subject){
    return Array.isArray(subject);
}


function deepCopy(subject){
   let copySubject;

   const subjectIsObject = isObject(subject);
   const subjectIsArray = isArray(subject);

   if (subjectIsArray) {
        copySubject = [];
   }else if(subjectIsObject){
        copySubject = {};
   } else {
    return subject;
   }

   for(key in subject){
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);
    }else{
        if (subjectIsArray) {
            copySubject.push(subject[key]);
        }else {
            copySubject[key] = subject[key];
        }
    }
   }

   return copySubject;
}


const studentBase = {
    name:undefined,
    email:undefined,
    age: undefined,
    approvedCourses:undefined,
    learningPaths: undefined,
    socialMedia:{
        twitter:undefined,
        instagram: undefined,
        facebook: undefined,
    },
};

const juan = deepCopy(studentBase);

Object.seal(juan);
Object.isSealed();
Object.isFrozen();

Object.defineProperty(juan,"name",{
    value:"juanito",
    configurable: false,
});


function requiredParam (param){
    throw new Error(param + " es obligatorio");
}


function createStudent(
    {age,
     name = requiredParam("name"),
     email = requiredParam("email"),
     twitter,
     instagram,
     facebook,
        approvedCourses = [],
        learningPaths = []
    } = {}){

        const private = {
            "_name": name,
        };

        const public ={
            name,
            age,
            email,
            approvedCourses,
            learningPaths,
            socialMedia:{
               twitter,
               instagram,
               facebook,
            },
          
            
            get name(){
                return private["_name"];
            },
            set name(newName){
                if(newName.length != 0){
                    private["_name"] = newName;
                }else{
                    console.warn("Tu nombre deber tener al menos 1 caracter")
                }
                return private["_name"];
            },



        };

        Object.defineProperty(public,"readName",{
            configurable: false,
            writable: false,
        });
        Object.defineProperty(public,"changeName",{
            configurable: false,
            writable: false,
        });


    return public ;
}

const juan = createStudent({
    name: "Juanito",
    age: 18,
    email: "juanito@frijolitos.com",
    twitter: "fjuandc"
}); //{}


function createLearnigPath({
    name = requiredParam("name"),
    courses = [],
}){

    const private ={
        "_name": name,
        "_courses": courses,
    };
    const public = {
        get name(){
            return private["_name"];
        },
        set name(newName){
            if(newName.length != 0){
                private["_name"] = newName;
            }else{
                console.warn("Tu nombre deber tener al menos 1 caracter")
            }
            return private["_name"];
        },

        get courses(){
            return private["_courses"];
        },
        
    };
    return public;
}