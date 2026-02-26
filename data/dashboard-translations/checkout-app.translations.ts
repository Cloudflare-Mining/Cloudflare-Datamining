{
	address: {
		billing_address: "Billing address",
		confirm_modal: {
			adjusted_address: "We adjusted your submitted address to match the recommendation from your local postal service.",
			title: "Verify your billing address",
			use_original: "Use original address",
			use_suggested: "Use suggested address"
		},
		optional: "(optional)"
	},
	common: {
		activate: "Activate",
		activate_product: "Activate %{name}",
		back: "Back",
		cancel: "Cancel",
		card: "Card",
		checkout: "Checkout",
		close: "Close",
		close_error_message: "Close error message",
		complete_purchase: "Complete purchase",
		continue: "Continue",
		divider_label: "OR",
		domain_checkout: "Domain Checkout",
		exit_checkout: "Exit checkout",
		go_back: "Go back",
		loading: "Loading",
		month: "month",
		ok: "OK",
		order_summary: "Order summary",
		please_check_payment_info: "Please check your payment information",
		purchase: "Purchase",
		register_domain: "Register domain",
		renew_domain: "Renew domain",
		restore_domain: "Restore domain",
		transfer_domain: "Transfer domain",
		session_expired: "Session Expired",
		total: "Total",
		unauthorized: "Unauthorized",
		usage_based: "Usage based",
		year: "year"
	},
	checkout: {
		exit: {
			button: "Exit",
			confirm: "Yes, exit checkout",
			cancel: "No, stay here",
			warning: "You are about to exit checkout. Your order will not be saved. Are you sure you want to do this?"
		},
		frequency: {
			monthly: "Monthly",
			annual: "Annual",
			save_percent: "Save %{percent}%"
		},
		summary: {
			due_today: "Due today",
			included_features: "Included features",
			plus_taxes: "Plus any applicable taxes and fees listed on your invoice, including state taxes, local taxes, VAT and GST.",
			base_fee_charged_today_usage_monthly: "Base fee charged today. Additional usage beyond included allowance billed monthly.",
			charged_monthly_for_usage: "Your account will only be charged for usage beyond the included free tier. Billing is calculated monthly based on actual usage.",
			price_month: "%{price}/month",
			price_year: "%{price}/year",
			price_per_month: "%{price} / month",
			price_per_year: "%{price} / year",
			view_details: "View details",
			annual_subscription: "Annual subscription",
			monthly_subscription: "Monthly subscription",
			you_save: "You save",
			savings_per_year: "%{amount}/year (%{percent}%)"
		}
	},
	error: {
		address_validation: "An unexpected address validation error occurred. Please try again in a moment.",
		application: "Application Error",
		processing_cashapp: "Error processing the payment using Cash App.",
		processing_card: "There was an error processing your card. Please check your details and try again.",
		subs_api: "There was an error communicating with the billing system. Please try again.",
		unexpected: "An unexpected error occurred while processing your payment."
	},
	form: {
		account_type: {
			label: "Account type",
			required: "Account type is required."
		},
		address: {
			label: "Address line 1",
			max: "Address must be 50 characters or less.",
			min: "Address must be 2 characters or more.",
			required: "Address is required."
		},
		address2: {
			label: "Address line 2",
			max: "Address line 2 must be 50 characters or less."
		},
		business: {
			label: "Business"
		},
		city: {
			label: "City",
			max: "City must be 80 characters or less.",
			required: "City is required."
		},
		organization: {
			label: "Organization name"
		},
		country: {
			label: "Country",
			required: "Country is required."
		},
		first_name: {
			label: "First name",
			max: "First name must be 50 characters or less.",
			min: "First name must be 2 characters or more.",
			required: "First name is required."
		},
		last_name: {
			label: "Last name",
			max: "Last name must be 90 characters or less.",
			min: "Last name must be 2 characters or more.",
			required: "Last name is required."
		},
		personal: {
			label: "Personal"
		},
		state: {
			label: "State",
			max: "State must be 40 characters or less.",
			min: "State must be 2 characters or more.",
			required: "State is required."
		},
		vat_gst: {
			label: "VAT/GST",
			malformed: "Must be a valid VAT/GST format.",
			max: "VAT/GST must be %{max} characters or less.",
			min: "VAT/GST must be %{min} characters or more.",
			required: "VAT/GST is required."
		},
		postal_code: {
			label: "Postal code",
			max: "Postal code must be 25 characters or less.",
			required: "Postal code is required."
		},
		zipcode: {
			label: "ZIP code",
			max: "ZIP code must be 25 characters or less.",
			required: "ZIP code is required."
		}
	},
	item: {
		price: "%{price}",
		price_included: "Included",
		price_per_month: "%{price} / month",
		price_per_year: "%{price} / year",
		usage: {
			after_plan_limits_exceeded: "After plan limits are exceeded:"
		}
	},
	page_title: {
		checkout: "Cloudflare | Checkout",
		checkout_payment: "Cloudflare | Checkout: Payment",
		confirm_purchase: "Cloudflare | Confirm Purchase"
	},
	payment: {
		authorizing: "Authorizing",
		captcha: {
			human_check: "Let us know you're human",
			required: "Captcha is required."
		},
		card: {
			expiration_date: "Expiration date",
			number: "Card number",
			security_code: "Security code",
			ending_in: "Card ending in %{last_four}",
			ending_in_expires: "Card ending in <0>%{last_four}</0> — expires %{month_year}",
			primary: "Primary"
		},
		edit_payment_method: "Use a different payment",
		payment_cancelled: "Payment cancelled by customer.",
		payment_method: "Payment method",
		secure_billing: "Secure billing"
	},
	paypal: {
		authenticated: "You have authenticated your PayPal account (%{email}).",
		charge_notice: "If you continue, PayPal will charge the last payment method you used for a Cloudflare purchase on your (%{email}) account.",
		pay_with_paypal: "Pay with PayPal",
		purchase: "Purchase",
		redirect_notice: 'After clicking "PayPal" you will be redirected to PayPal to complete your purchase securely.',
		reset: "Reset PayPal",
		reset_prompt: "Select <0>Reset PayPal</0> to use a different payment method or PayPal account.",
		saved_method: "PayPal saved method"
	},
	purchase: {
		agreement: {
			terms_of_service_and_privacy: "I agree to the <0>Terms of Service</0> and <1>Privacy Policy</1>.",
			authorize_charge_monthly_usage: "I authorize Cloudflare to charge this card for <0>usage that exceeds free limits</0> each month <1>until cancellation</1>. Cancellation is effective at the end of the current billing period. Contact us via the <2>Cloudflare Dashboard</2>.",
			authorize_domain_renewal: "I authorize Cloudflare to charge this card <0>%{price}</0> for %{years} of domain renewal."
		},
		check_payment_info: "Please check for missing or incorrect payment information.",
		clear_saved: "Clear saved card selection",
		complete: "Purchase complete",
		confirming: "Confirming",
		continue_billing: "Continue to billing address",
		pay_credit_card: "Pay with credit card",
		purchasing: "Purchasing",
		saved_cards: "Saved cards",
		select_saved_card: "Select a saved card",
		thank_you: "Thank you for your purchase! The subscription is active and you can begin using the service."
	},
	support: {
		contact_support: "Contact Support",
		billing_profile_problem: "For security reasons, there is a problem with your billing profile.",
		support_portal: "Refer to our <0>Support Portal</0> for assistance.",
		support_code: "Code: %{code_number}"
	}
}