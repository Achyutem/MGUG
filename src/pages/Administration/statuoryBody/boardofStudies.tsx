import MainLayout from "@/layouts/homeLayout";

const BoardOfStudies = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              अध्ययन बोर्ड / Board of Studies
            </h1>

            {/* Ayurveda Section */}
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">
                आयुर्वेद / Ayurveda
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-400">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        क्रम संख्या
                        <br />
                        S. No.
                      </th>
                      <th className="p-4 font-semibold">
                        नाम
                        <br />
                        Name
                      </th>
                      <th className="p-4 font-semibold">
                        पदनाम एवं विभाग
                        <br />
                        Designation & Department
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        दायित्व
                        <br />
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">1</td>
                      <td className="p-4">
                        प्रोफेसर डॉ. गिरिधर वेदांतम
                        <br />
                        Prof. Dr. Giridhar Vedantam
                      </td>
                      <td className="p-4">
                        प्राचार्य एवं प्रोफेसर, द्रव्यगुण
                        <br />
                        Principal & Professor, Dravyaguna
                      </td>
                      <td className="p-4">
                        अध्यक्ष
                        <br />
                        Chairperson
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">2</td>
                      <td className="p-4">
                        प्रोफेसर डॉ. मिनी के. वी
                        <br />
                        Prof. Dr. Mini K. V
                      </td>
                      <td className="p-4">
                        प्रोफेसर, रचना शरीर
                        <br />
                        Professor, Rachana Sharir
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">3</td>
                      <td className="p-4">
                        प्रोफेसर डॉ. गोपीकृष्ण
                        <br />
                        Prof. Dr. Gopikrishna
                      </td>
                      <td className="p-4">
                        प्रोफेसर, रोग निदान
                        <br />
                        Professor, Roga Nidana
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">4</td>
                      <td className="p-4">
                        प्रोफेसर डॉ. नवीना कोडलडी
                        <br />
                        Prof. Dr. Naveena Kodaladi
                      </td>
                      <td className="p-4">
                        प्रोफेसर, रसशास्त्र एवं भैषज्य कल्पना
                        <br />
                        Professor, Rasashastra & B.K.
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">5</td>
                      <td className="p-4">
                        प्रोफेसर डॉ. शांतिभूषण हंडूर
                        <br />
                        Prof. Dr. Shantibhushan Handur
                      </td>
                      <td className="p-4">
                        प्रोफेसर, संहिता एवं सिद्धांत
                        <br />
                        Professor, Samhita & Siddhanta
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">6</td>
                      <td className="p-4">
                        प्रोफेसर डॉ. रेशमी पुष्पन
                        <br />
                        Prof. Dr. Reshmi Pushpan
                      </td>
                      <td className="p-4">
                        प्रोफेसर, अगदतंत्र
                        <br />
                        Professor, Agadatantra
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">7</td>
                      <td className="p-4">
                        प्रोफेसर डॉ. देवी आर. नायर
                        <br />
                        Prof. Dr. Devi R. Nair
                      </td>
                      <td className="p-4">
                        प्रोफेसर, क्रिया शरीर
                        <br />
                        Professor, Kriya Sharir
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">8</td>
                      <td className="p-4">
                        प्रोफेसर डॉ. श्रीधर एस. लक्कुंडी
                        <br />
                        Prof. Dr. Shridhar S. Lakkundi
                      </td>
                      <td className="p-4">
                        प्रोफेसर, पंचकर्म
                        <br />
                        Professor, Panchakarma
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">9</td>
                      <td className="p-4">
                        प्रोफेसर डॉ. विष्णुमाया
                        <br />
                        Prof. Dr. Vishnumaya
                      </td>
                      <td className="p-4">
                        प्रोफेसर, प्रसूति एवं स्त्रीरोग
                        <br />
                        Professor, Prasuti & Striroga
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">10</td>
                      <td className="p-4">
                        डॉ. किरण कुमार रेड्डी
                        <br />
                        Dr. Kiran Kumar Reddy
                      </td>
                      <td className="p-4">
                        एसोसिएट प्रोफेसर, शल्यतंत्र
                        <br />
                        Associate Professor, Shalyatantra
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">11</td>
                      <td className="p-4">
                        डॉ. रिनजिन जी. कृष्णा
                        <br />
                        Dr. Rinjhin G. Krishna
                      </td>
                      <td className="p-4">
                        एसोसिएट प्रोफेसर, कायाचिकित्सा
                        <br />
                        Associate Professor, Kayachikitsa
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">12</td>
                      <td className="p-4">
                        डॉ. अश्वथी नारायणन
                        <br />
                        Dr. Ashwathi Narayanan
                      </td>
                      <td className="p-4">
                        सहायक प्रोफेसर, शालाक्य तंत्र
                        <br />
                        Assistant Professor, Shalakya
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">13</td>
                      <td className="p-4">
                        डॉ. श्रीलक्ष्मी सी. एल
                        <br />
                        Dr. Srilakshmi C. L
                      </td>
                      <td className="p-4">
                        सहायक प्रोफेसर, कौमारभृत्य
                        <br />
                        Assistant Professor, Kaumarbhritya
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">14</td>
                      <td className="p-4">
                        डॉ. वैसाख आर.
                        <br />
                        Dr. Vaisakh R.
                      </td>
                      <td className="p-4">
                        सहायक प्रोफेसर, स्वस्थवृत्त एवं योग
                        <br />
                        Assistant Professor, Swasthavritta & Yoga
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">15</td>
                      <td className="p-4">
                        डॉ. जी. एस. तोमर
                        <br />
                        Dr. G. S. Tomar
                      </td>
                      <td className="p-4">
                        सेवानिवृत्त प्राचार्य एवं प्रोफेसर, कायाचिकित्सा
                        <br />
                        Govt. Ayurveda College, Handia, U.P.
                      </td>
                      <td className="p-4">
                        बाहरी शैक्षणिक विशेषज्ञ
                        <br />
                        External Academic Expert
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/50 transition-colors">
                      <td className="p-4 rounded-bl-xl">16</td>
                      <td className="p-4">
                        डॉ. सुमित कुमार एम
                        <br />
                        Dr. Sumit Kumar M
                      </td>
                      <td className="p-4">
                        उप प्राचार्य एवं एसोसिएट प्रोफेसर, संहिता एवं सिद्धांत
                        <br />
                        Vice Principal & Associate Professor, Samhita &
                        Siddhanta
                      </td>
                      <td className="p-4 rounded-br-xl">
                        सदस्य-सचिव
                        <br />
                        Member Secretary
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Medical Microbiology Section */}
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">
                मेडिकल माइक्रोबायोलॉजी विभाग - सम्बद्ध स्वास्थ्य विज्ञान संकाय
                <br />
                Medical Microbiology - Faculty of Allied Health Sciences
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-400">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        क्रमांक
                        <br />
                        Sr. No.
                      </th>
                      <th className="p-4 font-semibold">
                        नाम
                        <br />
                        Name
                      </th>
                      <th className="p-4 font-semibold">
                        पदनाम एवं विभाग
                        <br />
                        Designation & Department
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        दायित्व
                        <br />
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">1</td>
                      <td className="p-4">
                        प्रो. (डॉ.) सुनील कुमार सिंह
                        <br />
                        Prof. (Dr.) Sunil Kumar Singh
                      </td>
                      <td className="p-4">
                        प्रोफेसर एवं अधिष्ठाता, सम्बद्ध स्वास्थ्य विज्ञान संकाय
                        <br />
                        Professor & Dean, Faculty of Allied Health Sciences
                      </td>
                      <td className="p-4">
                        अध्यक्ष
                        <br />
                        Chairperson
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">2</td>
                      <td className="p-4">
                        डॉ. गौरव राज
                        <br />
                        Dr. Gaurav Raj
                      </td>
                      <td className="p-4">
                        साइंटिस्ट डी, रीजनल मेडिकल रिसर्च सेंटर (ICMR), गोरखपुर
                        <br />
                        Scientist D, Regional Medical Research Centre (ICMR),
                        Gorakhpur
                      </td>
                      <td className="p-4">
                        विषय विशेषज्ञ
                        <br />
                        Subject Expert
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">3</td>
                      <td className="p-4">
                        डॉ. पवन कुमार कनौजिया
                        <br />
                        Dr. Pawan Kumar Kannaujia
                      </td>
                      <td className="p-4">
                        सहायक आचार्य, बायोटेक्नोलॉजी विभाग
                        <br />
                        Assistant Professor, Dept. of Biotechnology
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/50 transition-colors">
                      <td className="p-4 rounded-bl-xl">4</td>
                      <td className="p-4">
                        डॉ. धीरेन्द्र कुमार सिंह
                        <br />
                        Dr. Dhirendra Kumar Singh
                      </td>
                      <td className="p-4">
                        सहायक आचार्य, मेडिकल माइक्रोबायोलॉजी
                        <br />
                        Assistant Professor, Medical Microbiology
                      </td>
                      <td className="p-4 rounded-br-xl">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Medical Biochemistry Section */}
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">
                मेडिकल बायोकेमिस्ट्री - सम्बद्ध स्वास्थ्य विज्ञान संकाय
                <br />
                Medical Biochemistry - Faculty of Allied Health Sciences
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-400">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        क्रमांक
                        <br />
                        Sr. No.
                      </th>
                      <th className="p-4 font-semibold">
                        नाम
                        <br />
                        Name
                      </th>
                      <th className="p-4 font-semibold">
                        पदनाम एवं विभाग
                        <br />
                        Designation & Department
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        दायित्व
                        <br />
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">1</td>
                      <td className="p-4">
                        प्रो. (डॉ.) सुनील कुमार सिंह, प्रोफेसर एवं अधिष्ठाता
                        <br />
                        Prof. (Dr.) Sunil Kumar Singh , Professor & Dean
                      </td>
                      <td className="p-4">
                        सम्बद्ध स्वास्थ्य विज्ञान संकाय
                        <br />
                        Faculty of Allied Health Sciences
                      </td>
                      <td className="p-4">
                        अध्यक्ष
                        <br />
                        Chairperson
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">2</td>
                      <td className="p-4">
                        डॉ. राज कुमार, प्रोफेसर, मेडिकल बायोकेमिस्ट्री विभाग
                        <br />
                        Dr. Raj Kumar, Professor, Medical Biochemistry
                      </td>
                      <td className="p-4">
                        बी.आर.डी. मेडिकल कॉलेज, गोरखपुर
                        <br />
                        BRD Medical College, Gorakhpur
                      </td>
                      <td className="p-4">
                        विषय विशेषज्ञ
                        <br />
                        Subject Expert
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">3</td>
                      <td className="p-4">
                        डॉ. अनुपमा ओझा, सहायक आचार्य एवं विभागाध्यक्ष
                        <br />
                        Dr. Anupama Ojha, Assistant Professor & Head
                      </td>
                      <td className="p-4">
                        बायोकेमिस्ट्री विभाग, सम्बद्ध स्वास्थ्य विज्ञान संकाय
                        <br />
                        Biochemistry Dept., Faculty of Allied Health Sciences
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">4</td>
                      <td className="p-4">
                        डॉ. प्रेरणा अदिति, सहायक आचार्य
                        <br />
                        Dr. Prerna Aditi, Assistant Professor
                      </td>
                      <td className="p-4">
                        बायोकेमिस्ट्री विभाग, सम्बद्ध स्वास्थ्य विज्ञान संकाय
                        <br />
                        Biochemistry Dept., Faculty of Allied Health Sciences
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/50 transition-colors">
                      <td className="p-4 rounded-bl-xl">5</td>
                      <td className="p-4">
                        डॉ. किरन कुमार ए., सहायक आचार्य
                        <br />
                        Dr. Kiran Kumar A, Assistant Professor
                      </td>
                      <td className="p-4">
                        बायोकेमिस्ट्री विभाग, सम्बद्ध स्वास्थ्य विज्ञान संकाय
                        <br />
                        Biochemistry Dept., Faculty of Allied Health Sciences
                      </td>
                      <td className="p-4 rounded-br-xl">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Biotechnology Section */}
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">
                बायोटेक्नोलॉजी - सम्बद्ध स्वास्थ्य विज्ञान संकाय
                <br />
                Biotechnology - Faculty of Allied Health Sciences
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-400">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        क्रमांक
                        <br />
                        Sr. No.
                      </th>
                      <th className="p-4 font-semibold">
                        नाम
                        <br />
                        Name
                      </th>
                      <th className="p-4 font-semibold">
                        पदनाम एवं विभाग
                        <br />
                        Designation & Department
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        दायित्व
                        <br />
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">1</td>
                      <td className="p-4">
                        प्रो. (डॉ.) सुनील कुमार सिंह
                        <br />
                        Prof. (Dr.) Sunil Kumar Singh
                      </td>
                      <td className="p-4">
                        Professor & Dean, Faculty of Allied Health Sciences
                      </td>
                      <td className="p-4">
                        अध्यक्ष
                        <br />
                        Chairperson
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">2</td>
                      <td className="p-4">
                        डॉ. दिनेश यादव
                        <br />
                        Dr. Dinesh Yadav
                      </td>
                      <td className="p-4">
                        Professor, Department of Biotechnology, DDU Gorakhpur
                        University
                      </td>
                      <td className="p-4">
                        विषय विशेषज्ञ
                        <br />
                        Subject Expert
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">3</td>
                      <td className="p-4">
                        डॉ. अमित कुमार दूबे
                        <br />
                        Dr. Amit Kumar Dubey
                      </td>
                      <td className="p-4">Assistant Professor</td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">4</td>
                      <td className="p-4">
                        डॉ. पवन कुमार कनौजिया
                        <br />
                        Dr. Pawan Kumar Kannoujia
                      </td>
                      <td className="p-4">
                        Assistant Professor, Biotechnology Dept., Faculty of
                        Allied Health Sciences
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">5</td>
                      <td className="p-4">
                        डॉ. अंकिता मिश्रा
                        <br />
                        Dr. Ankita Mishra
                      </td>
                      <td className="p-4">
                        Assistant Professor, Biotechnology Dept., Faculty of
                        Allied Health Sciences
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">6</td>
                      <td className="p-4">
                        डॉ. अवेद्यनाथ सिंह
                        <br />
                        Dr. Avedhyanath Singh
                      </td>
                      <td className="p-4">
                        Assistant Professor, Biotechnology Dept., Faculty of
                        Allied Health Sciences
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/50 transition-colors">
                      <td className="p-4 rounded-bl-xl">7</td>
                      <td className="p-4">
                        डॉ. कीर्ति कुमार यादव
                        <br />
                        Dr. Kirti Kumar Yadav
                      </td>
                      <td className="p-4">
                        Assistant Professor, Biotechnology
                      </td>
                      <td className="p-4 rounded-br-xl">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BoardOfStudies;
