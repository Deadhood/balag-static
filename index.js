let x = 1

function handleClick(){
	
	let newMember = document.createElement('div')
	
	newMember.innerHTML = `<div>পরিবারের অন্যান্য সদস্যের নাম -- '${x}' <br />

			<label for=''>
				নাম <input type='text' name='onnanno-${x}' />
			</label>

			<div>
				<label for=''>সম্পর্ক <br/>
					<input type='radio' name='relation-${x}' value='ছেলে' /> ছেলে
					<input type='radio' name='relation-${x}' value='মেয়ে' /> মেয়ে
					<input type='radio' name='relation-${x}' value='পুত্রবধূ' /> পুত্রবধূ
					<input type='radio' name='relation-${x}' value='স্বামী' /> স্বামী
					<input type='radio' name='relation-${x}' value='স্ত্রী' /> স্ত্রী
					<input type='radio' name='relation-${x}' value='ভাই' /> ভাই
					<input type='radio' name='relation-${x}' value='বোন' /> বোন
					<input type='radio' name='relation-${x}' value='নাতি' /> নাতি
					<input type='radio' name='relation-${x}' value='নাতনি' /> নাতনি
					<input type='radio' name='relation-${x}' value='অন্যান্য' /> অন্যান্য
				</label>
			</div>



			<div>
				<label for=''>রক্তের গ্রুপ <br/>
					<input type='radio' name='bloodgroup-${x}' value='A+' /> A+
					<input type='radio' name='bloodgroup-${x}' value='A-' /> A-
					<input type='radio' name='bloodgroup-${x}' value='B+' /> B+
					<input type='radio' name='bloodgroup-${x}' value='B-' /> B-
					<input type='radio' name='bloodgroup-${x}' value='AB+' /> AB+
					<input type='radio' name='bloodgroup-${x}' value='AB-' /> AB-
					<input type='radio' name='bloodgroup-${x}' value='O+' /> O+
					<input type='radio' name='bloodgroup-${x}' value='O-' /> O-
				</label>
			</div>

			<div>
				<label for=''>মোবাইল
					<input type='text' name='mobile-${x}' />
				</label>
			</div>


			<div>
				<label for=''>জন্ম তারিখ
					<input type='text' name='birthdate-${x}' />
				</label>
			</div>

			<div>
				<label for=''>পেশা <br />
					<input type='radio' name='occupation-${x}' value='ছাত্র / ছাত্রী'/> ছাত্র /ছাত্রী
					<input type='radio' name='occupation-${x}' value='কৃষি'/> কৃষি
					<input type='radio' name='occupation-${x}' value='ব্যবসা'/> ব্যবসা
					<input type='radio' name='occupation-${x}' value='চাকরি'/> চাকরি 
					<input type='radio' name='occupation-${x}' value='গাড়ি চালক'/> গাড়ি চালক
					<input type='radio' name='occupation-${x}' value='দিন মজুর'/> দিন মজুর
					<input type='radio' name='occupation-${x}' value='ভিক্ষুক'/> ভিক্ষুক
					<input type='radio' name='occupation-${x}' value='অন্যন্য'/> অন্যন্য
				</label>
			</div>

			<div>
				<label for=''>লিঙ্গ <br />
					<input type='radio' name='sex-${x}' value='পুরুষ' /> পুরুষ
					<input type='radio' name='sex-${x}' value='মহিলা' /> মহিলা
					<input type='radio' name='sex-${x}' value='উভয় লিঙ্গ' /> উভয় লিঙ্গ
				</label>
			</div>


			<div>
				<label for=''>মাসিক আয়
					<input type='text' name='monthlyIncome-${x}' />
				</label>
			</div>


			<div>
				<label for=''>কাজের বিবরণ
					<input type='text' name='workDetails-${x}' />
				</label>
			</div>


			<div>
				<label for=''>এনআইডি / জন্ম নিবন্ধন নং
					<input type='text' name='nIdNumber-${x}' />
				</label>
			</div>


			<div>
				<label for=''>বৈবাহিক অবস্থা <br />
					<input type='radio' name='maritalStatus-${x}' value='বিবাহিত' /> বিবাহিত
					<input type='radio' name='maritalStatus-${x}' value='অবিবাহিত' /> অবিবাহিত
					<input type='radio' name='maritalStatus-${x}' value='বিধবা' /> বিধবা
				</label>
			</div>


			<div>
				<label for=''>স্বাস্থ্যগত অবস্থা <br />
					<input type='checkbox' name='disease-${x}' value='যক্ষা' /> যক্ষা
					<input type='checkbox' name='disease-${x}' value='ডায়াবেটিস' /> ডায়াবেটিস
					<input type='checkbox' name='disease-${x}' value='এইডস' /> এইডস
					<input type='checkbox' name='disease-${x}' value='ক্যান্সার' /> ক্যান্সার
					<input type='checkbox' name='disease-${x}' value='কুষ্ঠ' /> কুষ্ঠ
					<input type='checkbox' name='disease-${x}'	value='অন্যান্য' /> অন্যান্য 
				</label>
			</div>


			<div>
				<label for=''>
					ছাত্র / ছাত্রী হলে উপবৃত্তি পায় কিনা <input type='text' name='student-${x}' />
				</label>
			</div>


			<div>
				<label for=''>
					বিশেষ যোগ্যতা <input type='text' name='special-skill-${x}' />
				</label>
			</div>


			<div>
				<label for=''>
					মহিলা হলে স্বামী পরিত্যাক্ত কিনা <input type='text' name='widow-${x}' />
				</label>
			</div>

		</div> <hr />`
	
	document.querySelector('#onnanno').appendChild(newMember)
		
	x++
		
	}