{
	submit_an_abuse_report: "Submit an Abuse Report",
	report_type_label: "Report type",
	public_field_warning: "This field may be released by Cloudflare to third parties such as the <a target='_blank' href='https://lumendatabase.org/'>Lumen Database</a>.",
	select_a_report_type: "Select a report type from above to get started.",
	fields: {
		email: {
			label: "Your email address"
		},
		email2: {
			label: "Confirm email address",
			invalid: "This must be the same as the email entered above"
		},
		name: {
			label: "Your full name",
			required: "Enter your full name"
		},
		agent_name: {
			label: "\xa9 holder's full name",
			placeholder: "You must be the rights holder or an authorized agent thereof",
			required: "Enter copyright holder's full name"
		},
		title: {
			label: "Title"
		},
		company: {
			label: "Company name"
		},
		tele: {
			label: "Telephone",
			invalid: "Please enter a valid telephone number"
		},
		address1: {
			required: "You must provide an address"
		},
		city: {
			required: "You must provide a city"
		},
		country: {
			required: "You must provide a country"
		},
		state: {
			label: "State / province",
			required: "You must provide a state or province"
		},
		urls: {
			infringement: "Infringing URLs",
			evidence: "Evidence URLs",
			required: "You must provide URL(s)",
			placeholder: "Place each URL on a separate line",
			evidence_domains: "Evidence Domain(s)",
			required_domains: "You must provide domain(s)",
			placeholder_domains: "Place each domain on a separate line",
			invalid: {
				urls: "Missing or Incorrect Protocol ('http://', 'https://' etc.):",
				domains: "The following domains are invalid:"
			}
		},
		reported_country: {
			label: "Reporter current country",
			description: "Location in which the abuse was observed"
		},
		reported_user_agent: {
			label: "User agent",
			description: 'Please provide the browser name and version (ie: "Chrome/124.0") and/or the Operating System (ie: "macOS")',
			placeholder: "e.g., Chrome/124.0 macOS"
		},
		original_work: {
			label: "Describe the original work",
			placeholder: "Describe the copyrighted work in full detail, including links to the original work or evidence of source material",
			required: "You must describe the original work in full detail",
			brand: {
				label: "Targeted Brand",
				placeholder: "Provide a URL or description of the legitimate brand being phished or spoofed."
			}
		},
		justification: {
			label: "Logs or other evidence of abuse",
			placeholder: "Provide a detailed description of the infringement, including any necessary access details and the exact steps needed to view the content",
			required: "Please provide a detailed description of the infringement, including any necessary access details and the exact steps needed to view the content",
			minLength: "Your description must be at least 20 characters long."
		},
		comments: {
			label: "Comments",
			internal_description: "Comments are kept internal to Cloudflare and not shared with the host or customer as part of regular processing.",
			placeholder: "Any additional comments"
		},
		trademark_symbol: {
			label: "Trademarked word/symbol",
			placeholder: "Provide the exact registered mark",
			required: "Enter the trademarked word or symbol"
		},
		trademark_number: {
			label: "Registration number",
			description: "A federal or international trademark registration number is required",
			placeholder: "e.g., 000000",
			required: "Please enter a valid number without special characters (e.g., 1234567)"
		},
		trademark_office: {
			label: "Registration office",
			description: "The agency you registered your trademark with",
			placeholder: "e.g., USPTO",
			required: "Enter the registration office"
		},
		host_notification: {
			label: "Please forward my report to the website hosting provider.",
			include_contact_info: "Include my name and contact information with the report to the website hosting provider."
		},
		owner_notification: {
			label: "Please forward my report to the website owner.",
			include_contact_info: "Include my name and contact information with the report to the website owner."
		},
		ncmec_notification: {
			label: "Please include my name and contact information with the report to NCMEC.",
			header: "Share contact information with the National Center for Missing and Exploited Children?",
			description: '<span>Cloudflare is obligated to provide a summary of this report to the National Center for Missing and Exploited Children ("NCMEC").\nWould you also like us to share your contact information with NCMEC?</span>'
		},
		agree: {
			label: "I understand and agree",
			required: "You must acknowledge liability",
			header: "512(f) acknowledgment, Good faith belief, Authority to act",
			description: "By checking this box, you attest, that you have a good faith belief that use of the material in this report is not authorized by the copyright owner, its agent, or the law; AND that, under penalty of perjury, you are authorized to act on behalf of the copyright owner; AND you understand, under 17 U.S.C. \xa7 512(f), you may be liable for any damages, including costs and attorneys' fees, if you knowingly materially misrepresent reported material. Checking this box also confirms that you have a bona fide belief that the information and allegations contained in this report are accurate and complete, for purposes of the Digital Services Act."
		},
		dsa_attestation: {
			label: "I understand and agree",
			header: "DSA certification of bona fide belief",
			description: "By checking this box, you confirm that you have a bona fide belief that the information and allegations contained in this report are accurate and complete. Please note that, to the extent this report concerns a website using one of Cloudflare's hosting services, Cloudflare may require this box to be checked before engaging in the notice and action process."
		},
		ncsei_subject_representation: {
			label: "NCSEI Subject Representation",
			self: "I attest that: (1) the reported content contains nude and/or sexually explicit <b>images of me</b>; and (2) I did not consent to distribution of this content.",
			legally_represent: "I attest that: (1) the reported content contains nude and/or sexually explicit <b>images of a person that I legally represent</b>; and (2) the person that I represent did not consent to distribution of this content.",
			required: "You must select an option",
			description: "Selecting either option also confirms that you have a bona fide belief that the information and allegations contained in this report are accurate and complete, for purposes of the Digital Services Act."
		},
		source_ips: {
			label: "Source IPs",
			placeholder: "Place each IP address on a separate line"
		},
		destination_ips: {
			label: "Destination IPs",
			placeholder: "Place each IP address on a separate line"
		},
		ports_protocols: {
			label: "Destination ports and protocols",
			placeholder: "e.g. 22/TCP"
		},
		signature: {
			label: "Digital signature",
			required: "You must enter your full name",
			invalid: "This must match your full name",
			placeholder: "Enter your name to sign this submission",
			description: "By entering your name, you affirm all information is true and accurate while agreeing to the policies on this page."
		}
	},
	report_type: {
		abuse_dmca: {
			label: "Copyright Infringement & DMCA Violations",
			policy: "<em>Information to include in copyright complaints</em><span>Because Cloudflare shares copyright infringement complaints with the relevant hosting providers and website operators, we only process reports that include all information required by section 512(c) of the DMCA. To ensure that your copyright infringement abuse report is processed, you must include all information listed as required in the form. You may submit up to 250 URLs at a time. For more information about the information to include in your report, go <a target='_blank' href='https://www.cloudflare.com/trust-hub/reporting-abuse/'>here</a>. An explanation of our approach to abuse and what you can expect us to do in response to your report is available <a target='_blank' href='https://www.cloudflare.com/trust-hub/abuse-approach/'>here</a>. Please note that reports submitted through this form are subject to Cloudflare's <a target='_blank' href='https://www.cloudflare.com/privacypolicy/'>privacy policy</a>, and that reports may be released by Cloudflare to third parties such as the <a target='_blank' href='https://lumendatabase.org/'>Lumen Database.</a></span>"
		},
		abuse_trademark: {
			label: "Trademark Infringement",
			policy: "<em>How to submit a report</em><span>To file a report with Cloudflare, please select the appropriate category on the reporting form. Please be sure to fill out each field requested in the form and be as specific as possible regarding the content and its location on the website. You may submit up to 250 URLs at a time. An explanation of our approach to abuse and what you can expect us to do in response to your report is available <a target='_blank' href='https://www.cloudflare.com/trust-hub/abuse-approach/'>here</a>. Please note that reports submitted through this form are subject to Cloudflare's <a target='_blank' href='https://www.cloudflare.com/privacypolicy/'>privacy policy</a>, and that reports may be released by Cloudflare to third parties such as the <a target='_blank' href='https://lumendatabase.org/'>Lumen Database</a>.</span>"
		},
		abuse_children: {
			label: "Child Sexual Abuse Material (CSAM)",
			policy: "<em>Information specific to CSAM reports</em><span>Cloudflare prioritizes responding to reports of CSAM and will act on them expediently, including by reporting them to the <a target='_blank' href='https://report.cybertip.org/'>National Center for Missing and Exploited Children (\"NCMEC\")</a>. We would strongly recommend you contact NCMEC with a report as well. We encourage law enforcement officials to contact NCMEC directly for reports applicable to their jurisdiction. An explanation of our approach to abuse and what you can expect us to do in response to your report is available <a target='_blank' href='https://www.cloudflare.com/trust-hub/abuse-approach/'>here</a>. Please note that reports submitted through this form are subject to Cloudflare's <a target='_blank' href='https://www.cloudflare.com/privacypolicy/'>privacy policy</a>.</span>"
		},
		abuse_ncsei: {
			label: "Non-Consensual Sexually Explicit Imagery (NCSEI)",
			policy: "<em>Non-Consensual Sexually Explicit Imagery (NCSEI)</em><span>Non-Consensual Sexually Explicit Imagery abuse is when images (photographs or videos) depicting nudity or actual or simulations of sexual acts are shared on the Internet without the consent of one or more of the people shown. </br></br> To be processed, an NCSEI report must contain information indicating that: </br></br>1. The reported content contains nude and/or sexually explicit images of you or a person you legally represent (as a parent, guardian, lawyer, etc.); and</br></br>2. You or the person you represent did not consent to the distribution of the reported content.</br></br>If the image(s) or video(s) depict a person under the age of 18, please submit an abuse report for Child Sexual Abuse Material ('CSAM') instead.</br></br>An explanation of our approach to abuse and what you can expect us to do in response to your report is available <a target='_blank' href='https://www.cloudflare.com/trust-hub/abuse-approach/'>here</a>.</span>"
		},
		abuse_threat: {
			label: "Violent Threats and Harassment",
			policy: "<em>Note</em><span>Reports of violent threats and harassment may include reports of a sensitive nature. Cloudflare has limited ability to address violent threats and harassment: we are not the police and we cannot actively work with the police to report incidents that you report to us.  If you are aware of a credible threat of violence, call the police. An explanation of our approach to abuse and what you can expect us to do in response to your report is available <a target='_blank' href='https://www.cloudflare.com/trust-hub/abuse-approach/'>here</a>. Please note that reports submitted through this form are subject to Cloudflare's <a target='_blank' href='https://www.cloudflare.com/privacypolicy/'>privacy policy</a>.</span>"
		},
		abuse_phishing: {
			label: "Phishing & Malware",
			policy: "<em>How to submit a report</em><span>To file a report with Cloudflare, please select the appropriate category on the reporting form. Please be sure to fill out each field requested in the form and be as specific as possible regarding the content and its location on the website. You may submit up to 250 URLs at a time. An explanation of our approach to abuse and what you can expect us to do in response to your report is available <a target='_blank' href='https://www.cloudflare.com/trust-hub/abuse-approach/'>here</a>. Please note that reports submitted through this form are subject to Cloudflare's <a target='_blank' href='https://www.cloudflare.com/privacypolicy/'>privacy policy</a>, and that reports may be released by Cloudflare to third parties such as the <a target='_blank' href='https://lumendatabase.org/'>Lumen Database</a>.</span>"
		},
		abuse_general: {
			label: "General",
			policy: "<em>How to submit a report</em><span>To file a report with Cloudflare, please select the appropriate category on the reporting form. Please be sure to fill out each field requested in the form and be as specific as possible regarding the content and its location on the website. You may submit up to 250 URLs at a time. An explanation of our approach to abuse and what you can expect us to do in response to your report is available <a target='_blank' href='https://www.cloudflare.com/trust-hub/abuse-approach/'>here</a>. Please note that reports submitted through this form are subject to Cloudflare's <a target='_blank' href='https://www.cloudflare.com/privacypolicy/'>privacy policy</a>, and that reports may be released by Cloudflare to third parties such as the <a target='_blank' href='https://lumendatabase.org/'>Lumen Database</a>.</span>"
		},
		abuse_registrar_whois: {
			label: "Registrar",
			policy: "<em>Registrar reports</em> <span>Use this form to report any issues regarding domains that use Cloudflare's registrar services, including:</span> <ul> <li>Inaccurate WHOIS</li> <li>DNS abuse (malware, botnets, phishing, pharming, and spam)</li> <li>Trademark</li> <li>WHOIS disclosure requests</li> <li>Domain hijacking</li> </ul><br/> Please be sure to fill out each field requested in the form and be as specific as possible regarding the content and its location on the website. You may submit up to 250 URLs at a time. An explanation of our approach to abuse and what you can expect us to do in response to your report is available <a target='_blank' href='https://www.cloudflare.com/trust-hub/abuse-approach/'>here</a>. Please note that reports submitted through this form are subject to Cloudflare's <a target='_blank' href='https://www.cloudflare.com/privacypolicy/'>privacy policy</a>, and that reports may be released by Cloudflare to third parties such as the <a target='_blank' href='https://lumendatabase.org/'>Lumen Database.</a>"
		}
	},
	notify: {
		label: "Who should be notified?",
		description: "Please select at least one.<br/>Note: The hosting provider may have their own policies for how they notify the website owner of a complaint.",
		policy: "Because Cloudflare does not have the ability to remove content from a website, it is our practice to forward abuse complaints to entities like the hosting provider and/or website owner to follow up. Please specify:"
	},
	owner: {
		notify: "Should we notify the website owner?"
	},
	submit: {
		success: "Your report has been submitted successfully!",
		error: "An error occurred while submitting your report. Please try again later."
	}
}