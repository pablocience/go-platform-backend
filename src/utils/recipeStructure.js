export const go_data_column_structure = {
    cdp_app_id: 'CDP_APP_ID',
    co_id: 'CO_ID',
    bright_id: 'BRIGHT_ID',
    imported_data_id: 'IMPORTEDDATA_ID',
    contacts_linkedin_id: 'CONTACTS_LINKEDIN_ID',
    first_name: 'FIRST_NAME',
    last_name: 'LAST_NAME',
    middle_name: 'MIDDLE_NAME',
    gender: 'GENDER',
    birth_year: 'BIRTH_YEAR',
    linkedin_url: 'LINKEDIN_URL',
    work_email_validation_status: 'WORK_EMAIL_VALIDATION_STATUS',
    coop_work_email_last_seen: 'COOP_WORK_EMAIL_LAST_SEEN',
    coop_work_email_last_seen_less_180_days: 'COOP_WORK_EMAIL_LAST_SEEN_LESS_180DAYS',
    personal_emails: 'PERSONAL_EMAILS',
    sales_loft_last_contacted_at: 'SALESLOFT_LAST_CONTACTED_AT',
    sales_loft_do_not_contact: 'SALESLOFT_DO_NOT_CONTACT',
    sales_loft_bouncing: 'SALES_LOFT_BOUNCING',
    mobile_phone: 'MOBILE_PHONE',
    phone_numbers: 'PHONE_NUMBERS',
    contact_street_address: 'CONTACT_STREET_ADDRESS',
    contact_street_address_2: 'CONTACT_STREET_ADDRESS_2',
    contact_city: 'CONTACT_CITY',
    contact_state: 'CONTACT_STATE',
    contact_postal_code: 'CONTACT_POSTAL_CODE',
    contact_country: 'CONTACT_COUNTRY',
    job_title: 'JOB_TITLE',
    job_department: 'JOB_DEPARTMENT',
    job_sub_department: 'JOB_SUB_DEPARTMENT',
    seniority_level: 'SENIORITY_LEVEL',
    company_name: 'COMPANY_NAME',
    company_linkedin_url: 'COMPANY_LINKEDIN_URL',
    company_website: 'COMPANY_WEBSITE',
    company_phone: 'COMPANY_PHONE',
    industry: 'INDUSTRY',
    sic_code: 'SIC_CODE',
    company_revenue: 'COMPANY_REVENUE',
    company_specialties: 'COMPANY_SPECIALTIES',
    company_founded: 'COMPANY_FOUNDED',
    company_employee_count: 'COMPANY_EMPLOYEE_COUNT',
    company_employees_in_linkedind: 'COMPANY_EMPLOYEES_IN_LINKEDIN',
    company_crunchbase_url: 'COMPANY_CRUNCHBASE_URL',
    company_description: 'COMPANY_DESCRIPTION',
    company_street_address: 'COMPANY_STREET_ADDRESS',
    company_street_address_2: 'COMPANY_STREET_ADDRESS_2',
    company_city: 'COMPANY_CITY',
    company_state: 'COMPANY_STATE',
    company_postal_code: 'COMPANY_POSTAL_CODE',
    company_country: 'COMPANY_COUNTRY',
    co_file_drop_date: 'CO_FILE_DROP_DATE',
    old_co_ids: 'OLD_CO_IDS',
    api_waterfall_last_updated: 'API_WATERFALL_LAST_UPDATED',
    created_at: 'CREATED_AT',
    updated_at: 'UPDATED_AT',
    prove_verified: 'PROVE_VERIFIED',
    prove_full_name_score: 'PROVE_FULL_NAME_SCORE',
    prove_line_type: 'PROVE_LINE_TYPE',
    activity_score: 'ACTIVITY_SCORE',
    mapped_seniority_level: 'MAPPED_SENIORITY_LEVEL',
    new_seniority_level: 'NEW_SENIORITY_LEVEL',
}

export const recipe1_firmographics_input_column_structure = {
    COMPANY_NAME: 'Company Name',
    COMPANY_DOMAIN: 'Company Domain Name',
}

export const recipe1_firmographics_output_column_structure = {
    COMPANY_NAME: 'Company Name',
    COMPANY_DOMAIN: 'Company Domain Name',
    NAICS: 'NAICS',
    ['naics description']: 'NAICS Description',
    ['google business category']: 'Google Business Category',
    ['linkedin industry category']: 'LinkedIn Industry Category',
    ['isic code']: 'ISIC Code',
    ['sic code']: 'SIC Code',
    DUNS: 'DUNS',
    ['local registration number']: 'Local Registration Number',
    ['business description']: 'Business Description',
    ['companys number of locations']: 'Company\'s Number of Locations',
    ['entity hierarchy type']: 'EntityHierarchy Type',
    ['parent company']: 'Parent Company',
    ['ultimate parent name']: 'Ultimate Parent Name',
    ['zip code / postal code']: 'Zip code / postal code',
    ['companys credit score']: 'Company\'s credit score',
    ['companys credit score category']: 'Company\'s credit score category',
}

export const recipe2_domain_tech_input_column_structure = {
    COMPANY_NAME: 'Company Name',
    COMPANY_DOMAIN: 'Company Domain Name',
}

export const recipe2_domain_tech_output_column_structure = {
    COMPANY_NAME: 'Company Name',
    COMPANY_DOMAIN: 'Company Domain Name',
    ['number of company reviews']: 'Number of company reviews',
    ['companys online rating']: 'Company\'s online rating',
    ['company type']: 'Company Type',
    ['has official facebook profile']: 'Has official Facebook profile',
    ['number of returned search results']: 'Number of returned search results',
    ['company has official youtube']: 'Company has official YouTube',
    ['companys customer service contact returned in search']: 'Company\'s customer service contact returned in search',
    ['search returned companys youtube ']: 'Search returned company\'s YouTube',
    ['company has official instagram']: 'Company has official Instagram',
    ['companys avg. opening hour']: 'Company\'s avg. opening hour',
    ['company is temporarily closed']: 'Company is temporarily closed',
    ['search returned companys twitter']: 'Search returned company\'s Twitter',
    ['number of returned ads']: 'Number of returned ads',
    ['search returned companys wiki page']: 'Search returned company\'s wiki page',
    ['companys bio returned in search']: 'Company\'s bio returned in search',
    ['companys stock price']: 'Company\'s stock price',
    ['knowledge graph returned in search']: 'Knowledge graph returned in search',
    ['companys subsidiaries ']: 'Company\'s subsidiaries',
    ['companys number of hours open per week']: 'Company\'s number of hours open per week',
    ['ads description']: 'Ads description',
    ['ad titles returned from search results']: 'Ad titles returned from search results',
    ['number of ads containing companys name']: 'Number of ads containing companys name',
    ['companys number of days closed per week']: 'Company\'s number of days closed per week',
    ['phone number for companys customer service']: 'Phone number for company\'s customer service',
    ['number of sitelinks returned in ads']: 'Number of sitelinks returned in ads',
    ['number of ads containing sitelinks']: 'Number of ads containing sitelinks',
    ['has online payment options']: 'Has online payment options',
    ['technologies used by company website']: 'Technologies used by company website',
    ['company vertical']: 'Company vertical',
    ['domain average monthly spending']: 'Domain average monthly spending',
    ['has ecommerce technology']: 'Has ecommerce technology',
    ['money spend on website technologies']: 'Money spend on website technologies',
    ['number of technologies']: 'Number of technologies',
    ['number of premium technologies']: 'Number of premium technologies',
    ['payment technologies in use']: 'Payment technologies in use',
    ['technologies categories']: 'Technologies categories',
    ['domain suspicion status']: 'Domain suspicion status',
    ['has parked technologies']: 'Has parked technologies',
    ['technology sub-categories']: 'Technology sub-categories',
}

export const recipe3_web_presence_input_column_structure = {
    COMPANY_NAME: 'Company Name',
    COMPANY_DOMAIN: 'Company Domain Name',
}

export const recipe3_web_presence_output_column_structure = {
    COMPANY_NAME: 'Company Name',
    COMPANY_DOMAIN: 'Company Domain Name',
    ['visit duration time yoy: recent desktop user activity compared to 3 years ago']: 'Visit duration time yoy: recent desktop user activity compared to 3 years ago',
    ['site visits average yoy: total of recent users activity compared to 3 years ago']: 'Site visits average yoy: total of recent users activity compared to 3 years ago',
    ['bounce rate mom: recent desktop users activity compared to the corresponding month in the previous year']: 'Bounce rate mom: recent desktop users activity compared to the corresponding month in the previous year',
    ['bounce rate benchmark: recent mobile user activity compared to the previous year']: 'Bounce rate benchmark: recent mobile user activity compared to the previous year',
    ['visit duration time mom: recent desktop users activity compared to the corresponding month in the previous year']: 'Visit duration time mom: recent desktop users activity compared to the corresponding month in the previous year',
    ['bounce rate mom: total of recent users activity compared to the corresponding month in the previous year']: 'Bounce rate mom: total of recent users activity compared to the corresponding month in the previous year',
    ['bounce rate yoy: recent desktop user activity compared to 3 years ago']: 'Bounce rate yoy: recent desktop user activity compared to 3 years ago',
    ['website main category']: 'Website main category',
    ['pages per visit yoy: recent desktop user activity compared to 3 years ago']: 'Pages per visit yoy: recent desktop user activity compared to 3 years ago',
    ['pages per visit yoy: recent mobile user activity compared to 3 years ago']: 'Pages per visit yoy: recent mobile user activity compared to 3 years ago',
    ['pages per visit average mom: recent desktop users activity compared to the corresponding month in the previous year']: 'Pages per visit average mom: recent desktop users activity compared to the corresponding month in the previous year',
    ['pages per visit mom: recent mobile users activity compared to the corresponding month in the previous year']: 'Pages per visit mom: recent mobile users activity compared to the corresponding month in the previous year',
    ['visit duration time yoy: recent mobile user activity compared to 3 years ago']: 'Visit duration time yoy: recent mobile user activity compared to 3 years ago',
    ['visit duration time mom: recent mobile users activity compared to the corresponding month in the previous year']: 'Visit duration time mom: recent mobile users activity compared to the corresponding month in the previous year',
    ['website sited on yelp']: 'Website sited on yelp',
    ['has cart']: 'Has cart',
    ['has a podcast']: 'Has a podcast',
    ['has an instagram account']: 'Has an Instagram account',
    ['has a youtube account']: 'Has a YouTube account',
    ['website has an option to buy on the site']: 'Website has an option to buy on the site',
    ['has a twitter account']: 'Has a Twitter account',
    ['has a facebook account']: 'Has a Facebook account',
    ['website has mobile version']: 'Website has mobile version',
    ['website has about us section']: 'Website has about us section',
    ['has paypal option']: 'Has PayPal option',
    ['website has online shopping']: 'Website has online shopping',
    ['website uses google analytics']: 'Website uses Google analytics',
    ['has facility']: 'Has facility',
    ['has visit option']: 'Has visit option',
    ['has working hours']: 'Has working hours',
    ['has a pinterest account']: 'Has a Pinterest account',
    ['website description']: 'Website description',
    ['average price on website']: 'Average price on website',
    ['has login function']: 'Has login function',
    ['website has a search bar']: 'Website has a search bar',
    ['has a linkedin account']: 'Has a LinkedIn account',
    ['website has an appointment option']: 'Website has an appointment option',
}

export const recipe4_employee_stats_input_column_structure = {
    COMPANY_NAME: 'Company Name',
    COMPANY_DOMAIN: 'Company Domain Name',
}

export const recipe4_employee_stats_output_column_structure = {
    COMPANY_NAME: 'Company Name',
    COMPANY_DOMAIN: 'Company Domain Name',
    ['work life balance rating']: 'Work life balance rating',
    ['business outlook rating']: 'Business outlook rating',
    ['ceo approval rating']: 'CEO approval rating',
    ['career opportunities rating']: 'Career opportunities rating',
    ['negative interview experience']: 'Negative interview experience',
    ['overall rating']: 'Overall rating',
    ['recommend to friend rating']: 'Recommend to friend rating',
    ['positive interview experience']: 'Positive interview experience',
    ['senior management rating']: 'Senior management rating',
    ['culture values rating']: 'Culture values rating',
    ['compensation benefits rating']: 'Compensation benefits rating',
    ['diversity inclusion rating']: 'Diversity inclusion rating',
    ['percentage of profiles that disclose empolyee???s role']: 'Percentage of profiles that disclose empolyee???s role',
    ['qoq profiles that disclose employee???s role']: 'QoQ profiles that disclose employee???s role',
    ['percentage of engineering roles']: 'Percentage of engineering roles',
    ['percentage of operations roles']: 'Percentage of operations roles',
    ['percentage of customer service roles']: 'Percentage of customer service roles',
    ['percentage of media roles']: 'Percentage of media roles',
    ['percentage of human resources roles']: 'Percentage of human resources roles',
    ['percentage of public relations roles']: 'Percentage of public relations roles',
    ['percentage of marketing roles']: 'Percentage of marketing roles',
    ['percentage of sales roles']: 'Percentage of sales roles',
    ['percentage of design roles']: 'Percentage of design roles',
    ['percentage of legal roles']: 'Percentage of legal roles',
    ['percentage of finance roles']: 'Percentage of finance roles',
    ['percentage of health roles']: 'Percentage of health roles',
    ['percentage of education roles']: 'Percentage of education roles',
    ['percentage of real estate roles']: 'Percentage of real estate roles',
    ['percentage of professional trades roles']: 'Percentage of professional trades roles',
    ['average years directors at company']: 'Average years directors at company',
    ['percentage of c-level employees']: 'Percentage of C-level employees',
    ['average years c-level at company']: 'Average years C-level at company',
    ['percentage of c-level with phd']: 'Percentage of C-level with PHD',
    ['percentage of c-level with ma']: 'Percentage of C-level with MA',
    ['percentage of c-level ba degree']: 'Percentage of C-level BA degree',
    ['percentage of director level employees']: 'Percentage of director level employees',
    ['percentage of directors with phd']: 'Percentage of directors with PHD',
    ['percentage of directors with ma']: 'Percentage of directors with MA',
    ['percentage of directors with ba']: 'Percentage of directors with BA',
    ['percentage of vp level employees']: 'Percentage of VP level employees',
    ['average years vps at company']: 'Average years VPs at company',
    ['percentage of vps with phd']: 'Percentage of VPs with PHD',
    ['percentage of vps with ma']: 'Percentage of VPs with MA',
    ['percentage of vps with ba']: 'Percentage of VPs with BA',
    ['average years employees work at company']: 'Average years employees work at company',
    ['percentage of female employees']: 'Percentage of female employees',
    ['percentage of male employee']: 'Percentage of male employee',
    ['percentage of employees ages 20-30']: 'Percentage of employees ages 20-30',
    ['percentage of employees ages 30-40']: 'Percentage of employees ages 30-40',
    ['percentage of employees ages 40-50']: 'Percentage of employees ages 40-50',
    ['percentage of employees ages 50-60']: 'Percentage of employees ages 50-60',
    ['percentage of employees over 60']: 'Percentage of employees over 60',
    ['percentage of employees with ba']: 'Percentage of employees with BA',
    ['percentage of employees with ma']: 'Percentage of employees with MA',
    ['percentage of employees with phd']: 'Percentage of employees with PHD',
    ['average years since graduation']: 'Average years since graduation',
}

export const recipe5_funding_input_column_structure = {
    COMPANY_NAME: 'Company Name',
    COMPANY_DOMAIN: 'Company Domain Name',
}

export const recipe5_funding_output_column_structure = {
    COMPANY_NAME: 'Company Name',
    COMPANY_DOMAIN: 'Company Domain Name',
    ['transaction type']: 'Transaction type',
    ['transaction details']: 'Transaction details',
    ['transaction date']: 'Transaction date',
    ['transaction size']: 'Transaction size',
    PARTICIPANTS: 'Participants',
}

export const recipe6_cience_choice_input_column_structure = {
    COMPANY_NAME: 'Company Name',
    BUSINESS_WEBSITE: 'Business website',
    FIRST_NAME: 'First name',
    LAST_NAME: 'Last name',
    TITLE: 'Title',
    CORPORATE_EMAIL: 'Corporate e-mail',
    CORPORATE_PHONE_NUMBER: 'Corporate phone number',
    PHONE_NUMBER_DIRECT_1: 'Phone number direct 1',
    PHONE_NUMBER_DIRECT_2: 'Phone number direct 2',
    REVENUE: 'Revenue',
    INDUSTRY: 'Industry',
    COMPANY_SIZE: 'Company size',
    COMPANY_LINKEDIN: 'Company LinkedIn',
    DECISION_MAKER_LINKEDIN: 'Decision maker LinkedIn',
    HQ_COUNTRY: 'HQ Country',
    CONTACT_COUNTRY: 'Contact Country',
    HQ_STATE: 'HQ State',
    CONTACT_STATE: 'Contact State',
    CONTACT_CITY: 'Contact City',
}

export const recipe6_cience_choice_output_column_structure = {
    COMPANY_NAME: 'Company Name',
    BUSINESS_WEBSITE: 'Business website',
    FIRST_NAME: 'First name',
    LAST_NAME: 'Last name',
    TITLE: 'Title',
    CORPORATE_EMAIL: 'Corporate e-mail',
    CORPORATE_PHONE_NUMBER: 'Corporate phone number',
    PHONE_NUMBER_DIRECT_1: 'Phone number direct 1',
    PHONE_NUMBER_DIRECT_2: 'Phone number direct 2',
    REVENUE: 'Revenue',
    INDUSTRY: 'Industry',
    COMPANY_SIZE: 'Company size',
    COMPANY_LINKEDIN: 'Company LinkedIn',
    DECISION_MAKER_LINKEDIN: 'Decision maker LinkedIn',
    HQ_COUNTRY: 'HQ Country',
    CONTACT_COUNTRY: 'Contact Country',
    HQ_STATE: 'HQ State',
    CONTACT_STATE: 'Contact State',
    CONTACT_CITY: 'Contact City',
    ['companys credit score']: 'Company\'s credit score',
    ['companys credit score category']: 'Company\'s credit score category',
    ['companys number of locations']: 'Company\'s number of locations',
    ['number of connections to facebook']: 'Number of connections to Facebook',
    ['number of connections to instagram']: 'Number of connections to Instagram',
    ['number of connections to twitter']: 'Number of connections to Twitter',
    ['average price on website']: 'Average price on website',
    ['website has online shopping']: 'Website has online shopping',
    ['has facility']: 'Has facility',
    ['has cart']: 'Has cart',
    ['youtube channel']: 'YouTube channel',
    ['twitter profile']: 'Twitter profile',
    ['facebook profile']: 'Facebook profile',
    ['instagram link']: 'Instagram link',
    ['ad titles returned from search results']: 'Ad titles returned from search results',
    ['ads description']: 'Ads description',
    ['number of company reviews']: 'Number of company reviews',
    ['compensation benefits rating']: 'Compensation benefits rating',
    ['originating lender']: 'Originating lender',
    ['sba office code']: 'SBA office code',
    ['utilities proceed']: 'Utilities proceed',
    ['percentage of marketing roles']: 'Percentage of marketing roles',
}