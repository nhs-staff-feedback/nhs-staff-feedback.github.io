document.getElementsByClassName("student")[0]



let names = ["Abdelfattah, Nora", "Ali, Amal", "Allen, Lauren", "Ananthkar, Dhanush", "Anderson, Natalya", "Anumolu, Sourabh", "Anumolu, Sriya", "Arora, Shania", "Arya, Nikita", "Athavale, Antara","Aymes, Henry", "Azam, Hakeem Raisul", "Bagri, Anish", "Bajaj, Rishabh", "Banerjee, Protima", "Baral, Sahara", "Bayas, Alexandria", "Bhangale, Mamata B", "Bharadwaj, Anitej", "Bhat, Sachin", "Bhatcar, Shuban", "Bhatt, Rahul", "Bhattad, Anvita", "Bhaumik, Romit", "Bheemavarapu, Shreya", "Bommakanti, Manas", "Borad, Janvi", "Borredon, Francesca", "Bose, Uddipto", "Botnick, Sydney", "Boyler, Tess", "Bush, Madison", "Carlson, Joseph", "Chadha, Ankit", "Chakraborty, Swayam", "Chan, Chelsea", "Chandraghatgi, Rohan", "Chemburkar, Shachi", "Chen, Cheryl", "Chilukuri, Tejashri", "Commuri, Sriya", "Costa, Camila", "Das, Sandip", "Dham, Arnav", "Dhruv, Esha", "Dimitrakis, Dimitrios", "Dinker, Tia", "Dixit, Ira", "Dixon, Alexandra", "Domingo, Luke Anthony", "Dudi, Mithil", "Elsoury, Nora", "Galer, Yasaman", "Gangopadhyay, Adityaraj", "Ganguly, Jayshri", "Gleason, Anna", "Gokaram, Akul", "Goradia, Shailee", "Gorthy, Aditi", "Gupta, Adya", "Gurjar, Aaryani", "Gurugunti, Siya", "Haman, Emma", "Harikrishnan, Sahana", "Heba, Jenna", "Holl, Emily", "Huang, Joshua", "Hussain, Maha", "Iqbal, Sulphia", "Israni, Anushka", "Jain, Akash", "Jain, Disha", "Jairath, Aryan", "James, Angelin", "Jerry, Richard", "Johal, Mehar S", "Jones, Caroline", "Joseph, John", "Joshi, Anvi", "Kabaria, Krupa", "Kabilan, Aarthi", "Kabilan, Neha", "Kalra, Dhruv", "Kanagala, Priyanka", "Kanchanakuntla, Ashika", "Kandalgaonkar, Sneha", "Kapse, Nikhil", "Kariveda, Srihitha", "Kazi, Arshya", "Keiser, Amanda", "Kenny, Thomas", "Khandelwal, Rachit", "Khurram, Zoya", "Koganti, Vishal", "Kolavennu, Hima", "Kolli, Chetan", "Krishnam, Likhit", "Krishnan, Vanditha", "Kulkarni, Tanaya", "Kurella, Shreya", "Lakshmanan, Niketh", "Lauri, Jared", "Li, Matthew", "Lobo, Bridget", "Madduri, Jithin", "Magesh Kumar, Adityaa", "Majithia, Karan", "Malak, Ramzy", "Malinsky, Sophia", "Malli Sivakumar, Hamsini", "Man, Kristen", "Manakiwala, Aashvi", "Mandowara, Anirudh", "Manjrekar, Shreya", "Marupudi, Tanav", "Mascobetto, Tabitha", "Mastromonica, Holly", "Maurer, Amanda", "McGregor, Ian", "McLean, Sarah", "Mediratta, Ayush", "Menon, Vishnu", "Meruva, Dheeptha", "Meyers, Simone", "Mody, Maya", "Molter, Lauren", "Mosco, Griffin", "Munta, Ayush", "Muthaiah, Aparnaa", "Nagarajan, Nandita", "Nagarkar, Avani", "Naik, Mitali", "Narayanan, Shreya", "Narsinghani, Shreya", "Natale, Julie", "Nayana, Arnitha", "Nooguru, Saiesha", "Paluri, Avinash", "Patel,Dharmik", "Patel, Jasmin", "Patel, Karan", "Patel, Mohini", "Patel, Preksha", "Patel, Riya","Patel, Ruchi", "Patel, Ruchi", "Patel, Siddhi", "Patel, Viresh", "Paul, Rhea", "Paulraj, Jeffrey", "Peddireddy, Suchit", "Peer, Esha", "Peralta, Katrina", "Peyyety, Vaishnavi", "Phan, Giaminh", "Pilapil, Phoebe", "Polam, Vidhur", "Polilen, Ryan", "Pyati, Sia", "Rajan, Surya", "Rajendran, Melvin", "Raman, Rishi", "Vijay, Ramakrishnan", "Ramatchandiran, Dhanushree", "Rane, Aadi", "Rastogi, Roohika", "Rebello, Sage", "Redfield, Bryce", "Rednam, Soumya", "Roney, Kaelyn", "Rosamilia, Adelina", "Sahni, Ronaq", "Sahu, Debesh", "Sankar, Nathan", "Sankaran, Aruna", "Sankeshwarkar, Saniyah", "Sarma, Ritika", "Schwab, Katelyn", "Sebastian, Albert", "Shah, Aesha", "Shah, Neel", "Shah, Rishi", "Shashidhar, Nisarga", "Shaw, Alexandra", "Shenoy, Meghna", "Siddiqui, Fareen", "Singh, Isha", "Singh, Sukriti", "Sivakumar, Nandha", "Spinelli, Samantha", "Sriranganathan, Pranavan", "Srivastava, Yashi", "Sureshkumar, Mytreyi", "Syed, Uzma", "Talati, Roshan", "Tamvada, Abhiram", "Tejwani, Amrita", "Tellez, Anthony", "Thai, Alyssa", "Thakare, Abhishek", "Thaker, Shraddha", "Thakur, Anishka", "Tirumalai, Neha", "Tirumalai, Nisha", "Tsarkov, Dennis", "Tu, Joshua", "Venkatachalam, Jaanavi", "Venkatesh, Amitha", "Verma, Tanya", "Vuppala, Sreeya", "Weeden, Shelby", "Werner, Sophie", "Yacob, Yoel", "Yalaka, Saiswaraj", "Yemula, Shamika", "Young, Lucas", "Zappia, Claudia"]
let ids = ["10020375", "10013962", "10016038", "10023090", "10014054", "10014219", "10023181", "10014083", "10014534", "10019465", "10014167", "10014420", "10019397", "10013956", "10013958", "10018696", "10014085", "10019917", "10014336", "10013971", "10014152", "10013972", "10014064", "10013957", "10014171", "10015969", "10014234", "10014154", "10014133", "10014020", "10014174", "10019496", "10014098", "10014177", "10014519", "10014548", "10013968", "10018277", "10014055", "10014248", "10017620", "10014180", "10018692", "10014687", "10013065", "10014262", "10015953", "10014258", "30000004", "10025765", "10013999", "10014265", "10021694", "10024190", "10014561", "10014280", "10024478", "10016935", "10014007", "10015098", "10014027", "10014704", "10014645", "10014281", "10014140", "10014690", "10015076", "10014283", "10016305", "10015212", "10014285", "10019546", "10019363", "10014286", "10014429", "10014188", "10014036", "10025135", "10014141", "1002546", "10019712", "10019714", "10014037", "10014523", "10014190", "10014627", "10019784", "10014292", "10016365", "10014433", "10014044", "10021530", "10024244","10021679", "10020740", "10021515", "10023232", "10014227", "10020323", "10014178", "10021187", "10012241", "10014236", "10014436", "10016317", "10014230", "10014320", "10014321", "10014468", "10023941", "10014439", "10018480", "10014975", "10014323", "1004689", "10019558", "10014324", "10014329", "10014442", "10014665", "10014181", "10014326", "10014327", "10014444", "10014069", "10014465", "10014330", "10018444", "", "10014332", "10014225", "10014541", "10013980", "10014333", "10013943", "10019167", "10018767", "10019782", "10023931", "10014233", "10014543", "10014271", "10021562", "10014844", "10016321", "10011168", "10014449", "10014547", "10014616", "10017106", "10017224", "10014900", "10014077", "10014525", "10012268", "10022636", "10014207", "10014079", "10016346", "10018739", "10014414", "10014289", "10014279", "10021564", "10014291", "10014210", "10014416", "10014257", "10020512", "10014585", "10014179", "10021907", "10022635", "10014294", "10014459", "10021726", "10012544", "10014193", "10014045", "10014104", "10014194", "10014196", "10014463", "10016034", "10014101", "10014479", "10014199", "10024345", "", "10014135", "10014299", "10015166", "10014202", "10021332", "30000017", "10014301", "10014510", "10016173", "10020777", "10014302", "10021967", "10020373", "10014999", "10014998", "10015624", "10014943", "10014516", "10015942", "10014211", "10020681", "10014125", "10016105", "10020453", "10014237", "10014128", "10014129", "10014005"]

console.log("# of IDs: "+ids.length)
console.log("# of names: "+names.length)
let senior_names = ["Amme, Kelan", "Borkar, Nikhita", "Chettri, Ishani", "Donlon, Alexander", "Gummadapu, Shreya", "Iyer, Dhivya", "Kwock, Jillian", "Macksoud, Jenna", "Madduri, Nikhilesh", "Mohaniraj, Sarang", "Patel, Diya", "Patel, Isha", "Penta, Divya", "Reddy, Pranav", "Shah, Isha", "Sheffmaker, Sophia", "Smith, Anya", "Socio, Gabriella", "Squaires, Nina", "Von Bargen, Drew"]
let senior_ids = ["10012902", "10012730", "10021816", "10012738", "10020533", "10013489", "10012755", "10012825", "10016316", "10013063", "10023067", "10018460", "10013069", "10010122", "10013098", "10013242", "10012853", "10012855", "10013167", "10013148"]



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {





      for(nameIndex in names){
        let name = names[nameIndex]
        let id = ids[nameIndex]
        let div = document.getElementsByClassName("student")[0].cloneNode(true);
        div.getElementsByClassName("name")[0].innerText = name;
        div.getElementsByClassName("id")[0].innerText = id;
        div.getElementsByTagName("SELECT")[0].onchange = (event)=>updateFeild(id,event.target.value, "CHARACTER");
        div.getElementsByTagName("SELECT")[1].onchange = (event)=>updateFeild(id,event.target.value, "LEADERSHIP");
        div.getElementsByTagName("TEXTAREA")[0].onchange = (event)=>updateFeild(id,event.target.value, "COMMENT");
        div.style.display ="block"
        document.getElementById("kids").appendChild(div);
      }


      for(nameIndex in senior_names){
        let name = senior_names[nameIndex]
        let id = senior_ids[nameIndex]
        let div = document.getElementsByClassName("student")[0].cloneNode(true);
        div.getElementsByClassName("name")[0].innerText = name;
        div.getElementsByClassName("id")[0].innerText = id;
        div.style.display ="block"
        document.getElementById("seniors").appendChild(div);
      }

      function updateFeild(id,val,feild){
        if(val&&val.trim()&&val!="Choose...")
          firebase.database().ref(id+'/'+user.displayName).update({
            [feild]: val
          })
      }










  } else {
    window.location = "./index.html"
  }
});


