import React from "react";

function Appliaction(props) {
  var listOfNationality = [
      "National",
      "Afghan",
      "Albanian",
      "Algerian",
      "American",
      "Andorran",
      "Angolan",
      "Antiguan and Barbudan",
      "Argentine",
      "Armenian",
      "Australian",
      "Austrian",
      "Azerbaijani",
      "Bahamian",
      "Bahraini",
      "Bangladeshi",
      "Barbadian",
      "Belarusian",
      "Belgian",
      "Belizean",
      "Beninese",
      "Bhutanese",
      "Bolivian",
      "Bosnian",
      "Botswanan",
      "Brazilian",
      "British",
      "Bruneian",
      "Bulgarian",
      "Burkinabe",
      "Burmese",
      "Burundian",
      "Cambodian",
      "Cameroonian",
      "Canadian",
      "Cape Verdean",
      "Central African",
      "Chadian",
      "Chilean",
      "Chinese",
      "Colombian",
      "Comorian",
      "Congolese (Congo-Brazzaville)",
      "Congolese (Congo-Kinshasa)",
      "Costa Rican",
      "Croatian",
      "Cuban",
      "Cypriot",
      "Czech",
      "Danish",
      "Djiboutian",
      "Dominican (Dominican Republic)",
      "Dominican (Dominica)",
      "Dutch",
      "East Timorese",
      "Ecuadorean",
      "Egyptian",
      "Emirati",
      "Equatorial Guinean",
      "Eritrean",
      "Estonian",
      "Ethiopian",
      "Fijian",
      "Finnish",
      "French",
      "Gabonese",
      "Gambian",
      "Georgian",
      "German",
      "Ghanaian",
      "Greek",
      "Grenadian",
      "Guatemalan",
      "Guinean",
      "Guinean-Bissauan",
      "Guyanese",
      "Haitian",
      "Honduran",
      "Hungarian",
      "Icelandic",
      "Indian",
      "Indonesian",
      "Iranian",
      "Iraqi",
      "Irish",
      "Israeli",
      "Italian",
      "Ivorian",
      "Jamaican",
      "Japanese",
      "Jordanian",
      "Kazakhstani",
      "Kenyan",
      "Kiribati",
      "Korean (North)",
      "Korean (South)",
      "Kosovar",
      "Kuwaiti",
      "Kyrgyzstani",
      "Laotian",
      "Latvian",
      "Lebanese",
      "Liberian",
      "Libyan",
      "Liechtensteiner",
      "Lithuanian",
      "Luxembourger",
      "Macedonian",
      "Malagasy",
      "Malawian",
      "Malaysian",
      "Maldivian",
      "Malian",
      "Maltese",
      "Marshallese",
      "Mauritanian",
      "Mauritian",
      "Mexican",
      "Micronesian",
      "Moldovan",
      "Monegasque",
      "Mongolian",
      "Montenegrin",
      "Moroccan",
      "Mozambican",
      "Namibian",
      "Nauruan",
      "Nepalese",
      "New Zealander",
      "Nicaraguan",
      "Nigerien",
      "Nigerian",
      "Norwegian",
      "Omani",
      "Pakistani",
      "Palauan",
      "Palestinian",
      "Panamanian",
      "Papua New Guinean",
      "Paraguayan",
      "Peruvian",
      "Filipino",
      "Polish",
      "Portuguese",
      "Qatari",
      "Romanian",
      "Russian",
      "Rwandan",
      "Saint Kitts and Nevisian",
      "Saint Lucian",
      "Saint Vincentian",
      "Salvadoran",
      "Samoan",
      "San Marinese",
      "Sao Tomean",
      "Saudi",
      "Senegalese",
      "Serbian",
      "Seychellois",
      "Sierra Leonean",
      "Singaporean",
      "Slovak",
      "Slovenian",
      "Solomon Islander",
      "Somali",
      "South African",
      "South Sudanese",
      "Spanish",
      "Sri Lankan",
      "Sudanese",
      "Surinamese",
      "Swazi",
      "Swedish",
      "Swiss",
      "Syrian",
      "Taiwanese",
      "Tajikistani",
      "Tanzanian",
      "Thai",
      "Togolese",
      "Tongan",
      "Trinidadian and Tobagonian",
      "Tunisian",
      "Turkish",
      "Turkmen",
      "Tuvaluan",
      "Ugandan",
      "Ukrainian",
      "Uruguayan",
      "Uzbekistani",
      "Vanuatuan",
      "Venezuelan",
      "Vietnamese",
      "Yemeni",
      "Zambian",
      "Zimbabwean",
    ],
    listOfNationalityData = function (X) {
      return <option>{X}</option>;
    };
  var listOfField = [
      "select Field",
      "Agriculture",
      "Anthropology",
      "Archaeology",
      "Architecture",
      "Art and Design",
      "Astronomy",
      "Biochemistry",
      "Biology",
      "Business Administration",
      "Chemistry",
      "Civil Engineering",
      "Communications",
      "Computer Science",
      "Criminal Justice",
      "Culinary Arts",
      "Dentistry",
      "Earth Sciences",
      "Economics",
      "Education",
      "Electrical Engineering",
      "English Literature",
      "Environmental Science",
      "Film Studies",
      "Finance",
      "Fine Arts",
      "Forensic Science",
      "Geography",
      "Geology",
      "Graphic Design",
      "Health Sciences",
      "History",
      "Hospitality Management",
      "Human Resources",
      "Information Technology",
      "International Relations",
      "Journalism",
      "Law",
      "Linguistics",
      "Marine Biology",
      "Marketing",
      "Mathematics",
      "Mechanical Engineering",
      "Medicine",
      "Music",
      "Nursing",
      "Pharmacy",
      "Philosophy",
      "Physics",
      "Political Science",
      "Psychology",
      "Public Health",
      "Public Relations",
      "Sociology",
      "Sports Management",
      "Statistics",
      "Theater Arts",
      "Urban Planning",
      "Veterinary Medicine",
      "Wildlife Conservation",
    ],
    listOfFieldData = function (Y) {
      return <option>{Y}</option>;
    };
  var listOfCoruse = [
      "Arts/Humanities Stream",
      "B.Arch (Bachelor of Architecture)",
      "B.Com (Bachelor of Commerce)",
      "B.Design (Bachelor of Design)",
      "B.J.M.C. (Bachelor of Journalism and Mass Communication)",
      "B.Lib (Bachelor of Library Science)",
      "B.Pharm (Bachelor of Pharmacy)",
      "B.Sc. Aviation",
      "B.Sc. Biotechnology",
      "B.Sc. Chemistry",
      "B.Sc. Computer Science",
      "B.Sc. Economics",
      "B.Sc. Electronics",
      "B.Sc. Information Technology",
      "B.Sc. Mathematics",
      "B.Sc. Nursing",
      "B.Sc. Physics",
      "B.Sc. Radiology",
      "B.Tech/BE (Bachelor of Technology/Engineering)",
      "BA (Bachelor of Arts) in various subjects like History, Political Science, Sociology, Psychology, English, etc.",
      "BAMS (Bachelor of Ayurvedic Medicine and Surgery)",
      "BBA (Bachelor of Business Administration)",
      "BBA (Bachelor of Business Administration)",
      "BBM (Bachelor of Business Management)",
      "BCA (Bachelor of Computer Applications)",
      "BCA (Bachelor of Computer Applications)",
      "BDS (Bachelor of Dental Surgery)",
      "BFA (Bachelor of Fine Arts)",
      "BHM (Bachelor of Hotel Management)",
      "BHM (Bachelor of Hotel Management)",
      "BHMS (Bachelor of Homeopathic Medicine and Surgery)",
      "BMLT (Bachelor in Medical Laboratory Technology)",
      "BMS (Bachelor of Management Studies)",
      "BPA (Bachelor of Performing Arts)",
      "BPT (Bachelor of Physiotherapy)",
      "BSW (Bachelor of Social Work)",
      "BTTM (Bachelor of Travel and Tourism Management)",
      "CA (Chartered Accountancy)",
      "CMA (Cost Management Accounting)",
      "CS (Company Secretary)",
      "Diploma in Animation and Multimedia",
      "Diploma in Digital Marketing",
      "Diploma in Engineering",
      "Diploma in Event Management",
      "Diploma in Fashion Designing",
      "Diploma in Foreign Languages",
      "Diploma in Graphic Designing",
      "Diploma in Hotel Management",
      "Diploma in Interior Designing",
      "Diploma in Photography",
      "Integrated B.Tech+M.Tech",
      "Integrated Law Courses (B.A.+L.L.B., B.Com.+L.L.B., B.Sc.+L.L.B.)",
      "Integrated MBA",
      "LLM (Master of Laws)",
      "M.A (Master of Arts)",
      "M.A in Economics",
      "M.A in English, History, Political Science, Sociology, Psychology, etc.",
      "M.Com (Master of Commerce)",
      "M.Des (Master of Design)",
      "M.Ed (Master of Education)",
      "M.Pharm (Master of Pharmacy)",
      "M.Phil (Master of Philosophy)",
      "M.Sc (Master of Science)",
      "M.Sc in Biotechnology, Microbiology, Genetics",
      "M.Sc in Environmental Science",
      "M.Sc in Nursing",
      "M.Sc( Physics, Chemistry, Biology, Mathematics, Computer Science, etc.)",
      "M.Tech/M.E (Master of Technology/Master of Engineering)",
      "Master's in Animation and Multimedia",
      "Master's in Event Management (MEM)",
      "Master's in Hotel Management (MHM)",
      "MBA (Master of Business Administration)",
      "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
      "MCA (Master of Computer Applications)",
      "MD (Doctor of Medicine)",
      "MDS (Master of Dental Surgery)",
      "MFA (Master of Fine Arts)",
      "MJMC (Master of Journalism and Mass Communication)",
      "MMS (Master of Management Studies)",
      "MPH (Master of Public Health)",
      "MPT (Master of Physiotherapy)",
      "MS (Master of Surgery)",
      "MSW (Master of Social Work)",
      "PGDM (Post Graduate Diploma in Management)",
      "Ph.D (Doctor of Philosophy)",
    ],
    listOfCoruseData = function (A) {
      return <option>{A}</option>;
    };
  return (
    <div>
      <form action="" method="post">
        <h1 className="text-center">Application - Student Registration</h1>
        <table className="form">
          <h3>Personal infromation</h3>
          <tbody>
            <tr className="persoanlDetails row">
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="fname">
                    Frist Name <span>*</span>&nbsp;
                  </label>
                  <td>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      placeholder="Frist Name"
                      className="input_width outline"
                    />
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="lname">
                    Last Name<span>*</span>&nbsp;
                  </label>
                  <td>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      placeholder="Last Name"
                      className="input_width outline"
                    />
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="birthDate">
                    Birth Date<span>*</span>&nbsp;
                  </label>
                  <td>
                    <input
                      type="date"
                      name="birthdate"
                      id="birthDate"
                      className="input_width outline"
                    />
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <lable htmlFor="gender">
                    Gender <span>*</span>&nbsp;
                  </lable>
                  <td>
                    <input type="radio" name="gender" value="male" />
                    &nbsp;Male&nbsp;&nbsp;
                    <input type="radio" name="gender" value="female" />
                    &nbsp;Female&nbsp;&nbsp;
                    <input type="radio" name="gender" value="other" />
                    &nbsp;Other&nbsp;&nbsp;
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="hobby">Hobby</label>
                  <td>
                    <input
                      type="text"
                      placeholder="Hobby"
                      id="hobby"
                      className="input_width outline"
                    />
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="nationality">
                    Nationality<span>*</span>
                  </label>
                  <td>
                    <select id="nationality">
                      {listOfNationality.map(listOfNationalityData)}
                    </select>
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="phone">
                    Phone<span>*</span> &nbsp;
                  </label>
                  <td>
                    <input
                      type="tel"
                      name=""
                      id="phone"
                      maxLength={10}
                      placeholder="Phone Number"
                      className="input_width outtline"
                    />
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="email">
                    Email<span>*</span>&nbsp;
                  </label>
                  <td>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="input_width outline"
                      placeholder="Email Address"
                    />
                  </td>
                </td>
              </tr>
              <tr className="my-2">
                <td>
                  <label htmlFor="address">
                    Address<span>*</span>&nbsp;
                  </label>
                  <td>
                    <textarea
                      name="address"
                      id="address"
                      rows={5}
                      cols={50}
                      placeholder="Address"
                      className="outline"
                    ></textarea>
                  </td>
                </td>
              </tr>
            </tr>
          </tbody>
          <hr />
          <tbody>
            <tr className="parentinDetalis row">
              <h3>Parents/Guardain infromation</h3>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="parfname">
                    Frist Name<span>*</span>&nbsp;
                  </label>
                  <td>
                    <input
                      type="text"
                      name="fname"
                      id="parfname"
                      placeholder="Frist Name"
                      className="input_width outline"
                    />
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="parlname">
                    Last Name<span>*</span>&nbsp;
                  </label>
                  <td>
                    <input
                      type="text"
                      name="lname"
                      id="parlname"
                      placeholder="Last Name"
                      className="input_width outline"
                    />
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="relationship">
                    Relationship<span>*</span>
                  </label>
                  <td>
                    <select name="" id="relationship" className="input_width">
                      <option value="">Father</option>
                      <option value="">Mother</option>
                      <option value="">Sister</option>
                      <option value="">Brother</option>
                      <option value="">Uncle</option>
                      <option value="">Aunty</option>
                      <option value="">Grand Mother</option>
                      <option value="">Grand Faher</option>
                    </select>
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="parphone">
                    Phone <span>*</span>&nbsp;
                  </label>
                  <td>
                    <input
                      type="tel"
                      name=""
                      id="parphone"
                      maxLength={10}
                      placeholder="Phone Number"
                      className="input_width outline"
                    />
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="paremail">Email&nbsp;</label>
                  <td>
                    <input
                      type="email"
                      name="email"
                      id="paremail"
                      placeholder="Email Address"
                      className="input_width outline"
                    />
                  </td>
                </td>
              </tr>
              <tr className="my-2">
                <td>
                  <label htmlFor="paraddress">
                    Address(if Different From Student):<span>*</span>&nbsp;
                  </label>
                  <td>
                    <textarea
                      name="address"
                      id="paraddress"
                      rows={5}
                      cols={50}
                      placeholder="Address"
                      className="outline"
                    ></textarea>
                  </td>
                </td>
              </tr>
            </tr>
          </tbody>
          <hr />
          <tbody>
            <tr className="academicDetails row my-2">
              <h3>Academic Information</h3>
              <tr className="col-md-4">
                <td>
                  <label htmlFor="std">
                    Std <span>*</span>&nbsp;
                  </label>
                  <td>
                    <select name="" id="std" className="input_width">
                      <option value="">select Coruse</option>
                      <option value="">9th/10th</option>
                      <option value="">11th/12th</option>
                      {listOfCoruse.map(listOfCoruseData)}
                    </select>
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="schooleName">
                    School/College Name<span>*</span>
                  </label>
                  <td>
                    <select name="" id="schooleName" className="input_width">
                      <option value="">
                        School/College Name<span>*</span>
                      </option>
                    </select>
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="setnumber">
                    Set Number<span>*</span>
                  </label>
                  <td>
                    <input
                      type="text"
                      id="setnumber"
                      className="input_width outline"
                    />
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="Percentage">
                    Prcentage<span>*</span>
                  </label>
                  <td>
                    <input
                      type="text"
                      placeholder="Percentage"
                      id="Percentage"
                      className="input_width outline"
                    />
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="field">
                    Field<span>*</span>
                  </label>
                  <td>
                    <select id="field" className="input_width">
                      {listOfField.map(listOfFieldData)}
                    </select>
                  </td>
                </td>
              </tr>
              <tr className="col-md-4 my-2">
                <td>
                  <label htmlFor="degree">
                    Course<span>*</span>
                  </label>
                  <td>
                    <select name="" id="degree" className="input_width">
                      <option value="">select degree Course</option>
                      {listOfCoruse.map(listOfCoruseData)}
                    </select>
                  </td>
                </td>
              </tr>
            </tr>
          </tbody>
          <hr />
          <tbody>
            <tr className="achievement row">
              <h3>Achievement Doucment</h3>
              <div className="my-3 col col-lg-6 col-md-4 adharCard">
                <label htmlFor="adharCard">
                  Adhar Card<span>*</span>&nbsp;
                </label>
                <input
                  type="tel"
                  maxLength={14}
                  placeholder="XXXX XXXX XXXX"
                  id="adharCard"
                  className="outline"
                />
                <div class="input-group my-1">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile02"
                  
                  />
                  <label class="input-group-text" for="inputGroupFile02">
                    Upload
                  </label>
                </div>
              </div>
              <div className="my-3 col col-lg-6 col-md-4">
                <label htmlFor="uploadReueslt">
                  10th/12th Reueslt<span>*</span>&nbsp;
                </label>
                <input type="tel" placeholder="Set Number" id="uploadReueslt" />
                <div class="input-group my-1">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile02"
                  
                  />
                  <label class="input-group-text" for="inputGroupFile02">
                    Upload
                  </label>
                </div>
              </div>
              <div className="my-3 col col-lg-6 col-md-4">
                <label htmlFor="schoolLeaving">
                  Schoole Leaving Certificate<span>*</span>&nbsp;
                </label>
                <input
                  type="text"
                  id="schoolLeaving"
                  placeholder="Certificate number"
                  className="outline"
                />
                <div class="input-group my-1">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile02"
                  />
                  <label class="input-group-text" for="inputGroupFile02">
                    Upload
                  </label>
                </div>
              </div>
              <div className="my-3 col col-lg-6 col-md-4">
                <label htmlFor="casteCertificate">
                  Caste Certificate<span>*</span>&nbsp;
                </label>
                <input
                  type="text"
                  id="casteCertificate"
                  placeholder="Certificate number"
                  className="outline"
                />
                <div class="input-group my-1">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile02"
                   
                  />
                  <label class="input-group-text" for="inputGroupFile02">
                    Upload
                  </label>
                </div>
              </div>
              <div className="my-3 col col-lg-6 col-md-4">
                <label htmlFor="incomeCertificate">
                  Income Certificate<span>*</span>&nbsp;
                </label>
                <input
                  type="text"
                  id="incomeCertificate"
                  placeholder="Certificate number"
                />
                <div class="input-group my-1">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile02"
                  />
                  <label class="input-group-text" for="inputGroupFile02">
                    Upload
                  </label>
                </div>
              </div>
            </tr>
          </tbody>
          <hr />
          <tbody>
            <h3>Authorization</h3>
            <ol>
              <li><p>authorizes all schools you attended to provide all requested records and allow review of your application for the admission process chosen on this application. </p></li>
              <li><p>confirms all information in this application (including any supplemental information) is factually true and honestly presented and that you are the person
              submitting this application</p></li>
            </ol>
            <input type="checkbox" name="" id="" />cheak the all Conditinal
          </tbody>
          <div className="btn">
            <button type="button" class="btn btn-outline-secondary mx-2 px-5">
              Reset
            </button>
            <button type="button" class="btn btn-outline-success mx-2 px-5">
              Submit
            </button>
          </div>
        </table>
      </form>
    </div>
  );
}

export default Appliaction;
