document.getElementsByClassName("student")[0]



let names = ["Abdelfattah, Nora", "Ali, Amal", "Allen, Lauren", "Ananthkar, Dhanush", "Anderson, Natalya", "Anumolu, Sourabh", "Anumolu, Sriya", "Arora, Shania", "Arya, Nikita", "Athavale, Antara","Aymes, Henry", "Azam, Hakeem", "Raisul Bagri,", "Anish Bajaj,", "Rishabh Banerjee,", "Protima Baral,", "Sahara Bayas,", "Alexandria Bhangale,", "Mamata B", "Bharadwaj, Anitej", "Bhat, Sachin", "Bhatcar, Shuban", "Bhatt, Rahul", "Bhattad, Anvita", "Bhaumik, Romit", "Bheemavarapu, Shreya", "Bommakanti, Manas", "Borad, Janvi", "Borredon, Francesca", "Bose, Uddipto", "Botnick, Sydney", "Boyler, Tess", "Bush, Madison", "Carlson, Joseph", "Chadha, Ankit", "Chakraborty, Swayam", "Chan, Chelsea", "Chandraghatgi, Rohan", "Chemburkar, Shachi", "Chen, Cheryl", "Chilukuri, Tejashri", "Commuri, Sriya", "Costa, Camila", "Das, Sandip", "Dham, Arnav", "Dhruv, Esha", "Dimitrakis, Dimitrios", "Dinker, Tia", "Dixit, Ira", "Dixon, Alexandra", "Domingo,Luke", "Anthony Dudi,", "Mithil Elsoury,", "Nora Galer,", "Yasaman Gangopadhyay,", "Adityaraj Ganguly,", "Jayshri Gleason,", "Anna Gokaram,", "Akul Goradia,", "Shailee Gorthy,", "Aditi Gupta,", "Adya Gurjar,", "Aaryani Gurugunti,", "Siya Haman,", "Emma Harikrishnan,", "Sahana Heba,", "Jenna Holl,", "Emily Huang,", "Joshua Hussain,", "Maha Iqbal,", "Sulphia Israni,", "Anushka Jain,", "Akash Jain,", "Disha Jairath,", "Aryan James,", "Angelin Jerry,", "Richard Johal,", "Mehar S", "Jones, Caroline", "Joseph, John", "Joshi, Anvi", "Kabaria, Krupa", "Kabilan, Aarthi", "Kabilan, Neha", "Kalra, Dhruv", "Kanagala, Priyanka", "Kanchanakuntla, Ashika", "Kandalgaonkar, Sneha", "Kapse, Nikhil", "Kariveda, Srihitha", "Kazi, Arshya", "Keiser, Amanda", "Kenny, Thomas", "Khandelwal, Rachit", "Khurram, Zoya", "Koganti, Vishal", "Kolavennu, Hima", "Kolli, Chetan", "Krishnam, Likhit", "Krishnan, Vanditha", "Kulkarni, Tanaya", "Kurella,Shreya", "Lakshmanan, Niketh", "Lauri, Jared", "Li, Matthew", "Lobo, Bridget", "Madduri, Jithin", "Magesh Kumar,", "Adityaa Majithia,", "Karan Malak,", "Ramzy Malinsky,", "Sophia Malli", "Sivakumar, Hamsini", "Man, Kristen", "Manakiwala, Aashvi", "Mandowara, Anirudh", "Manjrekar, Shreya", "Marupudi, Tanav", "Mascobetto, Tabitha", "Mastromonica, Holly", "Maurer, Amanda", "McGregor, Ian", "McLean, Sarah", "Mediratta, Ayush", "Menon, Vishnu", "Meruva, Dheeptha", "Meyers, Simone", "Mody, Maya", "Molter, Lauren", "Mosco, Griffin", "Munta, Ayush", "Muthaiah, Aparnaa", "Nagarajan, Nandita", "Nagarkar, Avani", "Naik, Mitali", "Narayanan, Shreya", "Narsinghani, Shreya", "Natale, Julie", "Nayana, Arnitha", "Nooguru, Saiesha", "Paluri, Avinash", "Patel, Dharmik", "Patel, Jasmin", "Patel, Karan", "Patel, Mohini", "Patel, Preksha", "Patel, Riya", "Patel, Ruchi", "Patel, Ruchi", "Patel, Siddhi", "Patel, Viresh", "Paul, Rhea", "Paulraj, Jeffrey", "Peddireddy, Suchit", "Peer, Esha", "Peralta, Katrina", "Peyyety, Vaishnavi", "Phan, Giaminh", "Pilapil, Phoebe", "Polam, Vidhur", "Polilen, Ryan", "Pyati, Sia", "Rajan,Surya", "Rajendran, Melvin", "Raman, Rishi", "Vijay, Ramakrishnan", "Ramatchandiran, Dhanushree", "Rane, Aadi", "Rastogi, Roohika", "Rebello, Sage", "Redfield, Bryce", "Rednam, Soumya","Roney, Kaelyn", "Rosamilia, Adelina", "Sahni, Ronaq", "Sahu, Debesh", "Sankar, Nathan", "Sankaran, Aruna", "Sankeshwarkar, Saniyah", "Sarma, Ritika", "Schwab, Katelyn", "Sebastian, Albert", "Shah, Aesha", "Shah, Neel", "Shah, Rishi", "Shashidhar, Nisarga", "Shaw, Alexandra", "Shenoy, Meghna", "Siddiqui, Fareen", "Singh, Isha", "Singh, Sukriti", "Sivakumar, Nandha", "Spinelli, Samantha", "Sriranganathan, Pranavan", "Srivastava, Yashi", "Sureshkumar, Mytreyi", "Syed, Uzma", "Talati, Roshan", "Tamvada, Abhiram", "Tejwani, Amrita", "Tellez, Anthony", "Thai, Alyssa", "Thakare, Abhishek", "Thaker, Shraddha", "Thakur, Anishka", "Tirumalai, Neha", "Tirumalai, Nisha", "Tsarkov, Dennis", "Tu, Joshua", "Venkatachalam, Jaanavi", "Venkatesh, Amitha", "Verma, Tanya", "Vuppala, Sreeya", "Weeden, Shelby", "Werner, Sophie", "Yacob, Yoel", "Yalaka, Saiswaraj", "Yemula, Shamika", "Young, Lucas", "Zappia, Claudia"];








for(name of names){
  let div = document.getElementsByClassName("student")[0].cloneNode(true);
  div.getElementsByClassName("name")[0].innerText = name;
  div.style.display ="block"
  document.getElementById("kids").appendChild(div);
}




