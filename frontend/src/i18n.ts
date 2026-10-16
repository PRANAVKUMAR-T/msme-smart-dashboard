export type SupportedLanguage = 'English' | 'Hindi' | 'Tamil' | 'Malayalam';

export const LANGUAGE_OPTIONS: { code: SupportedLanguage; label: string; native: string; flag: string }[] = [
  { code: 'English', label: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'Hindi', label: 'Hindi', native: 'हिंदी', flag: '🇮🇳' },
  { code: 'Tamil', label: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  { code: 'Malayalam', label: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳' },
];

export const translations: Record<SupportedLanguage, Record<string, string>> = {
  English: {
    // Nav Items
    'nav.dashboard': 'Dashboard',
    'nav.inventory': 'Inventory',
    'nav.sales': 'Sales',
    'nav.purchases': 'Purchases',
    'nav.customers': 'Customers',
    'nav.suppliers': 'Suppliers',
    'nav.invoices': 'Invoices',
    'nav.gst': 'GST Compliance',
    'nav.reports': 'Reports',
    'nav.bi': 'Business Intelligence',
    'nav.predictions': 'Predictions',
    'nav.recommendations': 'Recommendations',
    'nav.settings': 'Settings',
    'nav.admin': 'Admin',
    'nav.logout': 'Logout',

    // Topbar & Common
    'topbar.search_placeholder': 'Search customers, invoices, products...',
    'topbar.switch_staff': 'Switch Staff',
    'topbar.notifications': 'Notifications',
    'topbar.mark_all_read': 'Mark all as read',
    'topbar.view_all_notifs': 'View All Notifications',
    'topbar.no_notifs': 'No notifications',

    // Dashboard
    'dash.title': 'Business Dashboard',
    'dash.subtitle': 'Monitor your sales, inventory and customer health at a glance.',
    'dash.eyebrow': 'ENTERPRISE OVERVIEW',
    'dash.compare_months': 'Compare Months',
    'dash.products': 'Products',
    'dash.stock_on_hand': 'Stock on hand',
    'dash.monthly_sales': 'Total Sales',
    'dash.active_customers': 'Active Customers',
    'dash.sales_trend': 'Sales Trend',
    'dash.revenue_perf': 'Revenue performance over time',
    'dash.stock_alerts': 'Stock Alerts',
    'dash.customer_overview': 'Customer Overview',
    'dash.view_all_customers': 'View all customers →',
    'dash.view_all_alerts': 'View all inventory alerts →',

    // Actions
    'action.new_sale': 'New Sale',
    'action.add_product': 'Add Product',
    'action.new_purchase': 'New Purchase',
    'action.new_customer': 'New Customer',
    'action.new_supplier': 'New Supplier',
    'action.create_invoice': 'Create Invoice',
    'action.save': 'Save',
    'action.cancel': 'Cancel',
    'action.edit': 'Edit',
    'action.delete': 'Delete',
    'action.remove': 'Remove',
    'action.view': 'View',
    'action.export': 'Export Data',
    'action.calculate_gst': 'Calculate GST',
    'action.filter': 'Filter',
    'action.reset_filters': 'Reset Filters',
    'action.reset_system': 'Factory System Reset',

    // Settings
    'settings.title': 'Workspace Settings',
    'settings.subtitle': 'Manage your personal preferences, business information, and workspace data.',
    'settings.tab_general': 'General',
    'settings.tab_profile': 'Business Profile',
    'settings.tab_users': 'Users & Access',
    'settings.tab_notifs': 'Notifications',
    'settings.tab_appearance': 'Appearance',
    'settings.tab_data': 'Data & Backup',
    'settings.language': 'Language',
    'settings.date_format': 'Date Format',
    'settings.currency': 'Currency',
    'settings.time_zone': 'Time Zone',
    'settings.save_preferences': 'Save Preferences',

    // Master Key & Reset
    'reset.dialog_title': 'Authorize System Reset',
    'reset.dialog_desc': 'Enter the Master Security Key to authorize complete factory data restoration.',
    'reset.enter_key': 'Enter Master Security Key',
    'reset.submit': 'Authorize & Reset',
    'reset.cancel': 'Cancel',
    'reset.invalid_key': 'Invalid Master Security Key. Authorization denied.',
    'reset.success': 'System factory reset successfully completed.',
  },

  Hindi: {
    // Nav Items
    'nav.dashboard': 'डैशबोर्ड',
    'nav.inventory': 'इन्वेंटरी',
    'nav.sales': 'बिक्री',
    'nav.purchases': 'खरीद',
    'nav.customers': 'ग्राहक',
    'nav.suppliers': 'आपूर्तिकर्ता',
    'nav.invoices': 'चालान (Invoices)',
    'nav.gst': 'जीएसटी अनुपालन',
    'nav.reports': 'रिपोर्ट',
    'nav.bi': 'बिजनेस इंटेलिजेंस',
    'nav.predictions': 'पूर्वानुमान',
    'nav.recommendations': 'सिफारिशें',
    'nav.settings': 'सेटिंग्स',
    'nav.admin': 'व्यवस्थापक',
    'nav.logout': 'लॉगआउट',

    // Topbar & Common
    'topbar.search_placeholder': 'ग्राहक, चालान, उत्पाद खोजें...',
    'topbar.switch_staff': 'स्टाफ बदलें',
    'topbar.notifications': 'सूचनाएं',
    'topbar.mark_all_read': 'सभी को पढ़ा हुआ चिह्नित करें',
    'topbar.view_all_notifs': 'सभी सूचनाएं देखें',
    'topbar.no_notifs': 'कोई सूचना नहीं',

    // Dashboard
    'dash.title': 'व्यापार डैशबोर्ड',
    'dash.subtitle': 'अपनी बिक्री, इन्वेंटरी और ग्राहक स्थिति पर एक नज़र में नज़र रखें।',
    'dash.eyebrow': 'व्यापार अवलोकन',
    'dash.compare_months': 'महीनों की तुलना करें',
    'dash.products': 'उत्पाद',
    'dash.stock_on_hand': 'उपलब्ध स्टॉक',
    'dash.monthly_sales': 'कुल बिक्री',
    'dash.active_customers': 'सक्रिय ग्राहक',
    'dash.sales_trend': 'बिक्री का रुझान',
    'dash.revenue_perf': 'समय के साथ राजस्व प्रदर्शन',
    'dash.stock_alerts': 'स्टॉक अलर्ट',
    'dash.customer_overview': 'ग्राहक अवलोकन',
    'dash.view_all_customers': 'सभी ग्राहक देखें →',
    'dash.view_all_alerts': 'सभी इन्वेंटरी अलर्ट देखें →',

    // Actions
    'action.new_sale': '+ नई बिक्री',
    'action.add_product': '+ उत्पाद जोड़ें',
    'action.new_purchase': '+ नई खरीद',
    'action.new_customer': '+ नया ग्राहक',
    'action.new_supplier': '+ नया आपूर्तिकर्ता',
    'action.create_invoice': '+ चालान बनाएं',
    'action.save': 'सहेजें',
    'action.cancel': 'रद्द करें',
    'action.edit': 'संपादित करें',
    'action.delete': 'हटाएं',
    'action.remove': 'हटाएं',
    'action.view': 'देखें',
    'action.export': 'डेटा निर्यात करें',
    'action.calculate_gst': 'जीएसटी गणना करें',
    'action.filter': 'फ़िल्टर',
    'action.reset_filters': 'फ़िल्टर रीसेट करें',
    'action.reset_system': 'सिस्टम रीसेट',

    // Settings
    'settings.title': 'कार्यक्षेत्र सेटिंग्स',
    'settings.subtitle': 'अपनी व्यक्तिगत प्राथमिकताएं, व्यावसायिक जानकारी और कार्यक्षेत्र डेटा प्रबंधित करें।',
    'settings.tab_general': 'सामान्य',
    'settings.tab_profile': 'व्यवसाय प्रोफ़ाइल',
    'settings.tab_users': 'उपयोगकर्ता और पहुंच',
    'settings.tab_notifs': 'सूचनाएं',
    'settings.tab_appearance': 'दिखावट (Appearance)',
    'settings.tab_data': 'डेटा और बैकअप',
    'settings.language': 'भाषा (Language)',
    'settings.date_format': 'दिनांक प्रारूप',
    'settings.currency': 'मुद्रा (Currency)',
    'settings.time_zone': 'समय क्षेत्र',
    'settings.save_preferences': 'प्राथमिकताएं सहेजें',

    // Master Key & Reset
    'reset.dialog_title': 'सिस्टम रीसेट अधिकृत करें',
    'reset.dialog_desc': 'फ़ैक्टरी डेटा रीसेट अधिकृत करने के लिए मास्टर सुरक्षा कुंजी दर्ज करें।',
    'reset.enter_key': 'मास्टर सुरक्षा कुंजी दर्ज करें',
    'reset.submit': 'अधिकृत करें और रीसेट करें',
    'reset.cancel': 'रद्द करें',
    'reset.invalid_key': 'अमान्य मास्टर सुरक्षा कुंजी। प्राधिकरण अस्वीकृत।',
    'reset.success': 'सिस्टम सफलतापूर्वक रीसेट हो गया है।',
  },

  Tamil: {
    // Nav Items
    'nav.dashboard': 'முகப்புப்பலகை',
    'nav.inventory': 'சரக்கு இருப்பு',
    'nav.sales': 'விற்பனை',
    'nav.purchases': 'கொள்முதல்',
    'nav.customers': 'வாடிக்கையாளர்கள்',
    'nav.suppliers': 'விற்பனையாளர்கள்',
    'nav.invoices': 'விலைப்பட்டியல்கள் (Invoices)',
    'nav.gst': 'ஜிஎஸ்டி மேலாண்மை',
    'nav.reports': 'அறிக்கைகள்',
    'nav.bi': 'வணிக நுண்ணறிவு',
    'nav.predictions': 'முன்னறிவிப்புகள்',
    'nav.recommendations': 'பரிந்துரைகள்',
    'nav.settings': 'அமைப்புகள்',
    'nav.admin': 'நிர்வாகி',
    'nav.logout': 'வெளியேறு',

    // Topbar & Common
    'topbar.search_placeholder': 'வாடிக்கையாளர்கள், விலைப்பட்டியல்கள், தயாரிப்புகள் தேடுக...',
    'topbar.switch_staff': 'பணியாளர் மாற்று',
    'topbar.notifications': 'அறிவிப்புகள்',
    'topbar.mark_all_read': 'அனைத்தையும் படித்ததாகக் குறிக்கவும்',
    'topbar.view_all_notifs': 'அனைத்து அறிவிப்புகளையும் காண்க',
    'topbar.no_notifs': 'அறிவிப்புகள் இல்லை',

    // Dashboard
    'dash.title': 'வணிக முகப்புப்பலகை',
    'dash.subtitle': 'உங்கள் விற்பனை, சரக்கு மற்றும் வாடிக்கையாளர் நிலையை ஒரே பார்வையில் கண்காணிக்கவும்.',
    'dash.eyebrow': 'வணிக மேலோட்டம்',
    'dash.compare_months': 'மாதங்களை ஒப்பிடுக',
    'dash.products': 'தயாரிப்புகள்',
    'dash.stock_on_hand': 'கையிருப்பு அளவு',
    'dash.monthly_sales': 'மொத்த விற்பனை',
    'dash.active_customers': 'செயலில் உள்ள வாடிக்கையாளர்கள்',
    'dash.sales_trend': 'விற்பனை போக்கு',
    'dash.revenue_perf': 'வருவாய் செயல்திறன்',
    'dash.stock_alerts': 'சரக்கு எச்சரிக்கைகள்',
    'dash.customer_overview': 'வாடிக்கையாளர் மேலோட்டம்',
    'dash.view_all_customers': 'அனைத்து வாடிக்கையாளர்களையும் காண்க →',
    'dash.view_all_alerts': 'அனைத்து எச்சரிக்கைகளையும் காண்க →',

    // Actions
    'action.new_sale': '+ புதிய விற்பனை',
    'action.add_product': '+ தயாரிப்பு சேர்',
    'action.new_purchase': '+ புதிய கொள்முதல்',
    'action.new_customer': '+ புதிய வாடிக்கையாளர்',
    'action.new_supplier': '+ புதிய விற்பனையாளர்',
    'action.create_invoice': '+ விலைப்பட்டியல் உருவாக்கு',
    'action.save': 'சேமிக்க',
    'action.cancel': 'ரத்துசெய்',
    'action.edit': 'திருத்து',
    'action.delete': 'நீக்கு',
    'action.remove': 'அகற்று',
    'action.view': 'காண்க',
    'action.export': 'ஏற்றுமதி செய்க',
    'action.calculate_gst': 'ஜிஎஸ்டி கணக்கிடு',
    'action.filter': 'வடிகட்டு',
    'action.reset_filters': 'வடிகட்டிகளை மீட்டமை',
    'action.reset_system': 'கணினி மீட்டமைப்பு',

    // Settings
    'settings.title': 'பணிவெளி அமைப்புகள்',
    'settings.subtitle': 'உங்கள் விருப்பத்தேர்வுகள் மற்றும் வணிகத் தகவல்களை நிர்வகிக்கவும்.',
    'settings.tab_general': 'பொதுவானவை',
    'settings.tab_profile': 'வணிக சுயவிவரம்',
    'settings.tab_users': 'பயனர்கள் & அணுகல்',
    'settings.tab_notifs': 'அறிவிப்புகள்',
    'settings.tab_appearance': 'தோற்றம் (Appearance)',
    'settings.tab_data': 'தரவு & காப்புப்பிரதி',
    'settings.language': 'மொழி (Language)',
    'settings.date_format': 'தேதி வடிவம்',
    'settings.currency': 'நாணயம்',
    'settings.time_zone': 'நேர மண்டலம்',
    'settings.save_preferences': 'விருப்பங்களைச் சேமிக்கவும்',

    // Master Key & Reset
    'reset.dialog_title': 'கணினி மீட்டமைப்பை அங்கீகரிக்கவும்',
    'reset.dialog_desc': 'தரவு மீட்டமைப்பை அங்கீகரிக்க முதன்மை பாதுகாப்புக் குறியீட்டை உள்ளிடவும்.',
    'reset.enter_key': 'முதன்மை பாதுகாப்புக் குறியீட்டை உள்ளிடவும்',
    'reset.submit': 'அங்கீகரித்து மீட்டமை',
    'reset.cancel': 'ரத்துசெய்',
    'reset.invalid_key': 'தவறான பாதுகாப்புக் குறியீடு. அங்கீகாரம் மறுக்கப்பட்டது.',
    'reset.success': 'கணினி தரவு வெற்றிகரமாக மீட்டமைக்கப்பட்டது.',
  },

  Malayalam: {
    // Nav Items
    'nav.dashboard': 'ഡാഷ്‌ബോർഡ്',
    'nav.inventory': 'ഇൻവെന്ററി',
    'nav.sales': 'വിൽപ്പന',
    'nav.purchases': 'വാങ്ങലുകൾ',
    'nav.customers': 'ഉപഭോക്താക്കൾ',
    'nav.suppliers': 'വിതരണക്കാർ',
    'nav.invoices': 'ഇൻവോയ്സുകൾ',
    'nav.gst': 'ജിഎസ്ടി പാലനം',
    'nav.reports': 'റിപ്പോർട്ടുകൾ',
    'nav.bi': 'ബിസിനസ് ഇന്റലിജൻസ്',
    'nav.predictions': 'പ്രവചനങ്ങൾ',
    'nav.recommendations': 'നിർദ്ദേശങ്ങൾ',
    'nav.settings': 'ക്രമീകരണങ്ങൾ',
    'nav.admin': 'അഡ്മിൻ',
    'nav.logout': 'ലോഗ്ഔട്ട്',

    // Topbar & Common
    'topbar.search_placeholder': 'ഉപഭോക്താക്കൾ, ഇൻവോയ്‌സുകൾ, ഉൽപ്പന്നങ്ങൾ തിരയുക...',
    'topbar.switch_staff': 'സ്റ്റാഫ് മാറ്റുക',
    'topbar.notifications': 'അറിയിപ്പുകൾ',
    'topbar.mark_all_read': 'എല്ലാം വായിച്ചതായി അടയാളപ്പെടുത്തുക',
    'topbar.view_all_notifs': 'എല്ലാ അറിയിപ്പുകളും കാണുക',
    'topbar.no_notifs': 'അറിയിപ്പുകൾ ഒന്നുമില്ല',

    // Dashboard
    'dash.title': 'ബിസിനസ് ഡാഷ്‌ബോർഡ്',
    'dash.subtitle': 'നിങ്ങളുടെ വിൽപ്പനയും സ്റ്റോക്കും ഉപഭോക്തൃ വിവരങ്ങളും ഒറ്റനോട്ടത്തിൽ നിരീക്ഷിക്കുക.',
    'dash.eyebrow': 'പൊതു അവലോകനം',
    'dash.compare_months': 'മാസങ്ങൾ താരതമ്യം ചെയ്യുക',
    'dash.products': 'ഉൽപ്പന്നങ്ങൾ',
    'dash.stock_on_hand': 'കൈവശമുള്ള സ്റ്റോക്ക്',
    'dash.monthly_sales': 'ആകെ വിൽപ്പന',
    'dash.active_customers': 'സജീവ ഉപഭോക്താക്കൾ',
    'dash.sales_trend': 'വിൽപ്പന പ്രവണത',
    'dash.revenue_perf': 'വരുമാന പ്രകടനം',
    'dash.stock_alerts': 'സ്റ്റോക്ക് മുന്നറിയിപ്പുകൾ',
    'dash.customer_overview': 'ഉപഭോക്തൃ അവലോകനം',
    'dash.view_all_customers': 'എല്ലാ ഉപഭോക്താക്കളെയും കാണുക →',
    'dash.view_all_alerts': 'എല്ലാ മുന്നറിയിപ്പുകളും കാണുക →',

    // Actions
    'action.new_sale': '+ പുതിയ വിൽപ്പന',
    'action.add_product': '+ ഉൽപ്പന്നം ചേർക്കുക',
    'action.new_purchase': '+ പുതിയ വാങ്ങൽ',
    'action.new_customer': '+ പുതിയ ഉപഭോക്താവ്',
    'action.new_supplier': '+ പുതിയ വിതരണക്കാരൻ',
    'action.create_invoice': '+ ഇൻവോയ്സ് ഉണ്ടാക്കുക',
    'action.save': 'സൂക്ഷിക്കുക',
    'action.cancel': 'റദ്ദാക്കുക',
    'action.edit': 'മാറ്റം വരുത്തുക',
    'action.delete': 'ഡിലീറ്റ് ചെയ്യുക',
    'action.remove': 'നീക്കം ചെയ്യുക',
    'action.view': 'കാണുക',
    'action.export': 'ഡാറ്റ എക്സ്പോർട്ട് ചെയ്യുക',
    'action.calculate_gst': 'ജിഎസ്ടി കണക്കാക്കുക',
    'action.filter': 'ഫിൽട്ടർ',
    'action.reset_filters': 'ഫിൽട്ടറുകൾ മാറ്റുക',
    'action.reset_system': 'സിസ്റ്റം പുനഃസ്ഥാപിക്കുക',

    // Settings
    'settings.title': 'ക്രമീകരണങ്ങൾ',
    'settings.subtitle': 'നിങ്ങളുടെ മുൻഗണനകളും ബിസിനസ്സ് വിവരങ്ങളും നിയന്ത്രിക്കുക.',
    'settings.tab_general': 'പൊതുവായത്',
    'settings.tab_profile': 'ബിസിനസ് പ്രൊഫൈൽ',
    'settings.tab_users': 'ഉപയോക്താക്കൾ & പ്രവേശനം',
    'settings.tab_notifs': 'അറിയിപ്പുകൾ',
    'settings.tab_appearance': 'രൂപഭംഗി (Appearance)',
    'settings.tab_data': 'ഡാറ്റ & ബാക്കപ്പ്',
    'settings.language': 'ഭാഷ (Language)',
    'settings.date_format': 'തീയതി ഫോർമാറ്റ്',
    'settings.currency': 'കറൻസി',
    'settings.time_zone': 'ടൈം സോൺ',
    'settings.save_preferences': 'മുൻഗണനകൾ സേവ് ചെയ്യുക',

    // Master Key & Reset
    'reset.dialog_title': 'സിസ്റ്റം റീസെറ്റ് അനുവദിക്കുക',
    'reset.dialog_desc': 'ഫാക്ടറി ഡാറ്റ റീസെറ്റ് ചെയ്യാൻ മാസ്റ്റർ സുരക്ഷാ കീ നൽകുക.',
    'reset.enter_key': 'മാസ്റ്റർ സുരക്ഷാ കീ നൽകുക',
    'reset.submit': 'റീസെറ്റ് ചെയ്യുക',
    'reset.cancel': 'റദ്ദാക്കുക',
    'reset.invalid_key': 'തെറ്റായ സുരക്ഷാ കീ. അനുമതി നിഷേധിച്ചു.',
    'reset.success': 'സിസ്റ്റം വിജയകരമായി പുനഃസ്ഥാപിച്ചു.',
  }
};

/**
 * Massive Comprehensive ERP Dictionary for Entire Webpage Auto-Translation
 * Covers all Navigation, Headers, Tables, Badges, Modals, Forms, Stats, Placeholders, and Buttons
 */
export const ERP_TRANSLATION_DICTIONARY: Record<Exclude<SupportedLanguage, 'English'>, Record<string, string>> = {
  Hindi: {
    // App Shell & Branding
    'MSME Smart': 'एमएसएमई स्मार्ट',
    'Smarter Decisions. Stronger MSMEs.': 'स्मार्ट निर्णय। मजबूत एमएसएमई।',

    // Navigation Items
    'Dashboard': 'डैशबोर्ड',
    'Inventory': 'इन्वेंटरी',
    'Add Product': 'उत्पाद जोड़ें',
    'Sales': 'बिक्री',
    'New Sale': 'नई बिक्री',
    'Purchases': 'खरीद',
    'New Purchase': 'नई खरीद',
    'Customers': 'ग्राहक',
    'New Customer': 'नया ग्राहक',
    'Suppliers': 'आपूर्तिकर्ता',
    'New Supplier': 'नया आपूर्तिकर्ता',
    'Invoices': 'चालान (Invoices)',
    'Create Invoice': 'चालान बनाएं',
    'GST': 'जीएसटी',
    'GST Compliance': 'जीएसटी अनुपालन',
    'Reports': 'रिपोर्ट',
    'Business Intelligence': 'बिजनेस इंटेलिजेंस',
    'Predictions': 'पूर्वानुमान',
    'Recommendations': 'सिफारिशें',
    'Settings': 'सेटिंग्स',
    'Admin': 'व्यवस्थापक',
    'Logout': 'लॉगआउट',

    // Topbar
    'Search customers, invoices, products...': 'ग्राहक, चालान, उत्पाद खोजें...',
    'Switch Staff': 'स्टाफ बदलें',
    'Notifications': 'सूचनाएं',
    'Mark all as read': 'सभी को पढ़ा हुआ चिह्नित करें',
    'View All Notifications': 'सभी सूचनाएं देखें',
    'No notifications': 'कोई सूचना नहीं',
    'Logged in as': 'लॉग इन किया गया',

    // Dashboard Overview
    'Business Dashboard': 'व्यापार डैशबोर्ड',
    'Monitor your sales, inventory and customer health at a glance.': 'अपनी बिक्री, इन्वेंटरी और ग्राहक स्थिति पर एक नज़र में नज़र रखें।',
    'ENTERPRISE OVERVIEW': 'व्यापार अवलोकन',
    'Compare Months': 'महीनों की तुलना करें',
    'Products': 'उत्पाद',
    'Stock on hand': 'उपलब्ध स्टॉक',
    'Total Sales': 'कुल बिक्री',
    'Active Customers': 'सक्रिय ग्राहक',
    'Sales Trend': 'बिक्री का रुझान',
    'Revenue performance over time': 'समय के साथ राजस्व प्रदर्शन',
    'Stock Alerts': 'स्टॉक अलर्ट',
    'Customer Overview': 'ग्राहक अवलोकन',
    'View all customers →': 'सभी ग्राहक देखें →',
    'View all inventory alerts →': 'सभी इन्वेंटरी अलर्ट देखें →',
    'Recent Transactions': 'हाल के लेन-देन',
    'Quick Actions': 'त्वरित कार्य',
    'Top Selling Products': 'शीर्ष बिकने वाले उत्पाद',
    'Month-on-Month Comparison': 'माह-दर-माह तुलना',
    'Total Revenue': 'कुल राजस्व',
    'Total Profit': 'कुल लाभ',
    'Gross Margin': 'सकल मार्जिन',
    'Orders Count': 'ऑर्डर संख्या',

    // Table Columns & Data Labels
    'Product Name': 'उत्पाद का नाम',
    'SKU': 'एसकेयू (SKU)',
    'Category': 'श्रेणी',
    'Stock Level': 'स्टॉक स्तर',
    'Stock': 'स्टॉक',
    'Price': 'मूल्य',
    'Unit Price': 'प्रति इकाई मूल्य',
    'Quantity': 'मात्रा',
    'Total Value': 'कुल मूल्य',
    'Reorder Level': 'पुनः ऑर्डर स्तर',
    'Actions': 'कार्य',
    'Action': 'कार्य',
    'ID': 'आईडी',
    'Contact Details': 'संपर्क विवरण',
    'Minimum Rating': 'न्यूनतम रेटिंग',
    '4.5★ and above': '4.5★ और ऊपर',
    '4.0★ and above': '4.0★ और ऊपर',
    '3.5★ and above': '3.5★ और ऊपर',
    'All Ratings': 'सभी रेटिंग',
    'All Categories': 'सभी श्रेणियां',
    'No suppliers match your filter criteria': 'कोई आपूर्तिकर्ता आपके फ़िल्टर से मेल नहीं खाता',
    'Status': 'स्थिति',
    'Order ID': 'ऑर्डर आईडी',
    'Purchase ID': 'खरीद आईडी',
    'Customer / Shop': 'ग्राहक / दुकान',
    'Customer Name': 'ग्राहक का नाम',
    'Contact Person': 'संपर्क व्यक्ति',
    'Phone': 'फ़ोन',
    'Phone Number': 'फ़ोन नंबर',
    'Email': 'ईमेल',
    'Email Address': 'ईमेल पता',
    'Location': 'स्थान',
    'GSTIN': 'जीएसटीआईएन (GSTIN)',
    'Credit Limit': 'क्रेडिट सीमा',
    'Balance': 'शेष राशि',
    'Outstanding Balance': 'बकाया शेष',
    'Supplier / Company': 'आपूर्तिकर्ता / कंपनी',
    'Supplier Name': 'आपूर्तिकर्ता का नाम',
    'Rating': 'रेटिंग',
    'Invoice #': 'चालान संख्या',
    'Invoice Date': 'चालान दिनांक',
    'Due Date': 'देय तिथि',
    'Taxable Amount': 'कर योग्य राशि',
    'GST Amount': 'जीएसटी राशि',
    'Total Amount': 'कुल राशि',
    'Subtotal': 'उप-योग',
    'Tax': 'कर',
    'Total': 'कुल',
    'Role': 'भूमिका',
    'Joined On': 'शामिल हुए',
    'Last Active': 'अंतिम सक्रिय',
    'Timestamp': 'समय',
    'User': 'उपयोगकर्ता',
    'Activity': 'गतिविधि',
    'Details': 'विवरण',
    'IP Address': 'आईपी पता',
    'Device': 'उपकरण',
    'Severity': 'गंभीरता',

    // Action Buttons
    '+ Add Product': '+ उत्पाद जोड़ें',
    '+ New Sale': '+ नई बिक्री',
    '+ New Purchase': '+ नई खरीद',
    '+ New Customer': '+ नया ग्राहक',
    '+ New Supplier': '+ नया आपूर्तिकर्ता',
    '+ Create Invoice': '+ चालान बनाएं',
    'Save': 'सहेजें',
    'Save Changes': 'परिवर्तन सहेजें',
    'Cancel': 'रद्द करें',
    'Edit': 'संपादित करें',
    'Delete': 'हटाएं',
    'Remove': 'हटाएं',
    'View': 'देखें',
    'View Details': 'विवरण देखें',
    'Filter': 'फ़िल्टर',
    'Reset Filters': 'फ़िल्टर रीसेट करें',
    'Clear': 'साफ़ करें',
    'Search': 'खोजें',
    'Export': 'निर्यात करें',
    'Export Data': 'डेटा निर्यात करें',
    'Export CSV': 'सीएसवी निर्यात करें',
    'Download': 'डाउनलोड करें',
    'Download PDF': 'पीडीएफ डाउनलोड करें',
    'Print': 'प्रिंट करें',
    'Print Invoice': 'चालान प्रिंट करें',
    'Close': 'बंद करें',
    'Back': 'वापस',
    'Next': 'अगला',
    'Submit': 'सबमिट करें',
    'Apply': 'लागू करें',
    'Confirm': 'पुष्टि करें',
    'Refresh': 'ताज़ा करें',
    'Add User': 'उपयोगकर्ता जोड़ें',
    'Add New User': 'नया उपयोगकर्ता जोड़ें',
    'Manage Roles': 'भूमिकाएं प्रबंधित करें',
    'View Logs': 'लॉग देखें',
    'Calculate GST': 'जीएसटी गणना करें',
    'Factory System Reset': 'सिस्टम रीसेट',
    'Save Preferences': 'प्राथमिकताएं सहेजें',
    'Save Profile': 'प्रोफ़ाइल सहेजें',
    'Authorize & Reset': 'अधिकृत करें और रीसेट करें',

    // Statuses & Badges
    'Paid': 'भुगतान किया',
    'Pending': 'लंबित',
    'Overdue': 'अतिदेय',
    'Active': 'सक्रिय',
    'Inactive': 'निष्क्रिय',
    'Healthy': 'स्वस्थ',
    'Low Stock': 'कम स्टॉक',
    'Out of Stock': 'स्टॉक समाप्त',
    'In Stock': 'स्टॉक उपलब्ध',
    'Success': 'सफल',
    'Warning': 'चेतावनी',
    'Critical': 'गंभीर',
    'Info': 'सूचना',
    'High': 'उच्च',
    'Medium': 'मध्यम',
    'Low': 'निम्न',
    'Optimal': 'इष्टतम',
    'Connected': 'कनेक्टेड',

    // Roles
    'Administrator': 'प्रशासक',
    'Founder': 'संस्थापक',
    'Founder/Executive': 'संस्थापक / कार्यकारी',
    'Co-Founder': 'सह-संस्थापक',
    'Sales Manager': 'बिक्री प्रबंधक',
    'Purchase Manager': 'खरीद प्रबंधक',
    'Inventory Staff': 'इन्वेंटरी स्टाफ',
    'Sales Staff': 'बिक्री स्टाफ',

    // Admin & Telemetry
    'System Administration & Control Center': 'सिस्टम प्रशासन और नियंत्रण केंद्र',
    'Enterprise audit logs, system telemetry, and role-based access management.': 'उद्यम ऑडिट लॉग, सिस्टम टेलीमेट्री और भूमिका-आधारित पहुंच प्रबंधन।',
    'System Health: Optimal': 'सिस्टम स्थिति: इष्टतम',
    'Database Status: Connected (MongoDB)': 'डेटाबेस स्थिति: कनेक्टेड (MongoDB)',
    'Active Sessions': 'सक्रिय सत्र',
    'System Uptime': 'सिस्टम अपटाइम',
    'User Growth': 'उपयोगकर्ता वृद्धि',
    'System Activities': 'सिस्टम गतिविधियाँ',
    'User Directory': 'उपयोगकर्ता निर्देशिका',
    'Activity Audit Trail': 'गतिविधि ऑडिट ट्रेल',
    'Audit Trail': 'ऑडिट ट्रेल',
    'User Activity Logs': 'उपयोगकर्ता गतिविधि लॉग',
    'User Activity Logs & Audit Trail': 'उपयोगकर्ता गतिविधि लॉग और ऑडिट ट्रेल',
    'Role Permissions Matrix': 'भूमिका अनुमति मैट्रिक्स',
    'Role Distribution': 'भूमिका वितरण',

    // Settings
    'Workspace Settings': 'कार्यक्षेत्र सेटिंग्स',
    'Manage your personal preferences, business information, and workspace data.': 'अपनी व्यक्तिगत प्राथमिकताएं, व्यावसायिक जानकारी और कार्यक्षेत्र डेटा प्रबंधित करें।',
    'General': 'सामान्य',
    'Business Profile': 'व्यवसाय प्रोफ़ाइल',
    'Users & Access': 'उपयोगकर्ता और पहुंच',
    'Appearance': 'दिखावट',
    'Data & Backup': 'डेटा और बैकअप',
    'Integrations': 'एकीकरण',
    'Language': 'भाषा',
    'Date Format': 'दिनांक प्रारूप',
    'Currency': 'मुद्रा',
    'Time Zone': 'समय क्षेत्र',
    'Items Per Page': 'प्रति पृष्ठ आइटम',
    'Theme Mode': 'थीम मोड',
    'Color Palette': 'रंग पैलेट',
    'Atmosphere & Density': 'घनत्व व वातावरण',
    'Authorize System Reset': 'सिस्टम रीसेट अधिकृत करें',
    'Enter Master Security Key': 'मास्टर सुरक्षा कुंजी दर्ज करें',
    'Wipe All Data': 'सभी डेटा मिटाएं',

    // GST & Reports
    'GST Compliance & Tax Reports': 'जीएसटी अनुपालन और कर रिपोर्ट',
    'Overview of GSTR-1, GSTR-3B filings, tax liability, and input tax credit (ITC).': 'जीएसटीआर-1, जीएसटीआर-3बी फाइलिंग, कर देयता और इनपुट टैक्स क्रेडिट का अवलोकन।',
    'Tax Liability': 'कर देयता',
    'Eligible ITC': 'पात्र आईटीसी',
    'Net GST Payable': 'शुद्ध देय जीएसटी',
    'GSTR-1 Summary': 'जीएसटीआर-1 सारांश',
    'GSTR-3B Filing': 'जीएसटीआर-3बी फाइलिंग',
    'Financial & Operational Reports': 'वित्तीय और परिचालन रिपोर्ट',
    'Comprehensive reports on sales, purchases, inventory valuation, and cash flow.': 'बिक्री, खरीद, इन्वेंटरी मूल्यांकन और नकदी प्रवाह पर व्यापक रिपोर्ट।',
    'Sales Summary': 'बिक्री सारांश',
    'Purchase Summary': 'खरीद सारांश',
    'Inventory Valuation': 'इन्वेंटरी मूल्यांकन',
    'Profit & Loss': 'लाभ और हानि',

    // Business Intelligence & Predictions
    'Business Intelligence & Analytics': 'बिजनेस इंटेलिजेंस और एनालिटिक्स',
    'AI Predictive Analytics': 'एआई भविष्यसूचक विश्लेषण',
    'Demand Forecast': 'मांग का पूर्वानुमान',
    'Predicted Demand': 'अनुमानित मांग',
    'High Confidence': 'उच्च विश्वास',
    'Medium Confidence': 'मध्यम विश्वास',
    'Low Confidence': 'कम विश्वास',
    'Restock Recommendations': 'पुनर्भरण सिफारिशें',
    'Growth Rate': 'विकास दर',

    // Common phrases & helper words
    'Showing': 'दिखा रहा है',
    'of': 'का',
    'to': 'से',
    'entries': 'प्रविष्टियाँ',
    'records': 'रिकॉर्ड',
    'items': 'वस्तुएं',
    'Units': 'इकाइयाँ',
    'Select': 'चुनें',
    'All': 'सभी',
    'Today': 'आज',
    'Yesterday': 'कल',
    'This Week': 'इस सप्ताह',
    'This Month': 'इस महीने',
    'This Year': 'इस वर्ष',
    'Yes': 'हाँ',
    'No': 'नहीं',
    'Name': 'नाम',
    'Full Name': 'पूरा नाम',
    'City': 'शहर',
    'Address': 'पता',
    'Notes': 'टिप्पणियाँ',
    'Description': 'विवरण',

    // Input Placeholders
    'Search products...': 'उत्पाद खोजें...',
    'Search sales...': 'बिक्री खोजें...',
    'Search customers...': 'ग्राहक खोजें...',
    'Search invoices...': 'चालान खोजें...',
    'Search suppliers...': 'आपूर्तिकर्ता खोजें...',
    'Search logs...': 'लॉग खोजें...',
    'Enter product name': 'उत्पाद का नाम दर्ज करें',
    'Enter customer name': 'ग्राहक का नाम दर्ज करें',
    'Enter supplier name': 'आपूर्तिकर्ता का नाम दर्ज करें',
    'Enter phone number': 'फ़ोन नंबर दर्ज करें',
    'Enter email': 'ईमेल दर्ज करें',
    'Enter price': 'मूल्य दर्ज करें',
    'Enter quantity': 'मात्रा दर्ज करें',
  },

  Tamil: {
    // App Shell & Branding
    'MSME Smart': 'எம்எஸ்எம்இ ஸ்மார்ட்',
    'Smarter Decisions. Stronger MSMEs.': 'புத்திசாலித்தனமான முடிவுகள். வலுவான சிறுதொழில்கள்.',

    // Navigation Items
    'Dashboard': 'முகப்புப்பலகை',
    'Inventory': 'சரக்கு இருப்பு',
    'Add Product': 'தயாரிப்பு சேர்',
    'Sales': 'விற்பனை',
    'New Sale': 'புதிய விற்பனை',
    'Purchases': 'கொள்முதல்',
    'New Purchase': 'புதிய கொள்முதல்',
    'Customers': 'வாடிக்கையாளர்கள்',
    'New Customer': 'புதிய வாடிக்கையாளர்',
    'Suppliers': 'விற்பனையாளர்கள்',
    'New Supplier': 'புதிய விற்பனையாளர்',
    'Invoices': 'விலைப்பட்டியல்கள் (Invoices)',
    'Create Invoice': 'விலைப்பட்டியல் உருவாக்கு',
    'GST': 'ஜிஎஸ்டி',
    'GST Compliance': 'ஜிஎஸ்டி மேலாண்மை',
    'Reports': 'அறிக்கைகள்',
    'Business Intelligence': 'வணிக நுண்ணறிவு',
    'Predictions': 'முன்னறிவிப்புகள்',
    'Recommendations': 'பரிந்துரைகள்',
    'Settings': 'அமைப்புகள்',
    'Admin': 'நிர்வாகி',
    'Logout': 'வெளியேறு',

    // Topbar
    'Search customers, invoices, products...': 'வாடிக்கையாளர்கள், விலைப்பட்டியல்கள், தயாரிப்புகள் தேடுக...',
    'Switch Staff': 'பணியாளர் மாற்று',
    'Notifications': 'அறிவிப்புகள்',
    'Mark all as read': 'அனைத்தையும் படித்ததாகக் குறிக்கவும்',
    'View All Notifications': 'அனைத்து அறிவிப்புகளையும் காண்க',
    'No notifications': 'அறிவிப்புகள் இல்லை',
    'Logged in as': 'உள்நுழைந்துள்ளவர்',

    // Dashboard Overview
    'Business Dashboard': 'வணிக முகப்புப்பலகை',
    'Monitor your sales, inventory and customer health at a glance.': 'உங்கள் விற்பனை, சரக்கு மற்றும் வாடிக்கையாளர் நிலையை ஒரே பார்வையில் கண்காணிக்கவும்.',
    'ENTERPRISE OVERVIEW': 'வணிக மேலோட்டம்',
    'Compare Months': 'மாதங்களை ஒப்பிடுக',
    'Products': 'தயாரிப்புகள்',
    'Stock on hand': 'கையிருப்பு அளவு',
    'Total Sales': 'மொத்த விற்பனை',
    'Active Customers': 'செயலில் உள்ள வாடிக்கையாளர்கள்',
    'Sales Trend': 'விற்பனை போக்கு',
    'Revenue performance over time': 'வருவாய் செயல்திறன்',
    'Stock Alerts': 'சரக்கு எச்சரிக்கைகள்',
    'Customer Overview': 'வாடிக்கையாளர் மேலோட்டம்',
    'View all customers →': 'அனைத்து வாடிக்கையாளர்களையும் காண்க →',
    'View all inventory alerts →': 'அனைத்து எச்சரிக்கைகளையும் காண்க →',
    'Recent Transactions': 'சமீபத்திய பரிவர்த்தனைகள்',
    'Quick Actions': 'விரைவு செயல்கள்',
    'Top Selling Products': 'அதிகம் விற்பனையாகும் பொருட்கள்',
    'Month-on-Month Comparison': 'மாதந்தோறும் ஒப்பீடு',
    'Total Revenue': 'மொத்த வருவாய்',
    'Total Profit': 'மொத்த லாபம்',
    'Gross Margin': 'மொத்த லாப விகிதம்',
    'Orders Count': 'ஆர்டர்கள் எண்ணிக்கை',

    // Table Columns & Data Labels
    'Product Name': 'தயாரிப்பு பெயர்',
    'SKU': 'குறியீடு (SKU)',
    'Category': 'வகை',
    'Stock Level': 'சரக்கு இருப்பு அளவு',
    'Stock': 'சரக்கு',
    'Price': 'விலை',
    'Unit Price': 'யூனிட் விலை',
    'Quantity': 'அளவு',
    'Total Value': 'மொத்த மதிப்பு',
    'Reorder Level': 'மறு ஆர்டர் அளவு',
    'Actions': 'செயல்கள்',
    'Action': 'செயல்',
    'ID': 'எண்',
    'Contact Details': 'தொடர்பு விவரங்கள்',
    'Minimum Rating': 'குறைந்தபட்ச மதிப்பீடு',
    '4.5★ and above': '4.5★ மற்றும் அதற்கு மேல்',
    '4.0★ and above': '4.0★ மற்றும் அதற்கு மேல்',
    '3.5★ and above': '3.5★ மற்றும் அதற்கு மேல்',
    'All Ratings': 'அனைத்து மதிப்பீடுகள்',
    'All Categories': 'அனைத்து வகைகள்',
    'No suppliers match your filter criteria': 'உங்கள் வடிப்பான் அளவுகோல்களுடன் எந்த விற்பனையாளரும் பொருந்தவில்லை',
    'Status': 'நிலை',
    'Order ID': 'ஆர்டர் எண்',
    'Purchase ID': 'கொள்முதல் எண்',
    'Customer / Shop': 'வாடிக்கையாளர் / கடை',
    'Customer Name': 'வாடிக்கையாளர் பெயர்',
    'Contact Person': 'தொடர்பு நபர்',
    'Phone': 'தொலைபேசி',
    'Phone Number': 'தொலைபேசி எண்',
    'Email': 'மின்னஞ்சல்',
    'Email Address': 'மின்னஞ்சல் முகவரி',
    'Location': 'இடம்',
    'GSTIN': 'ஜிஎஸ்டி எண்',
    'Credit Limit': 'கடன் வரம்பு',
    'Balance': 'மீதித் தொகை',
    'Outstanding Balance': 'நிலுவைத் தொகை',
    'Supplier / Company': 'விற்பனையாளர் / நிறுவனம்',
    'Supplier Name': 'விற்பனையாளர் பெயர்',
    'Rating': 'மதிப்பீடு',
    'Invoice #': 'விலைப்பட்டியல் எண்',
    'Invoice Date': 'விலைப்பட்டியல் தேதி',
    'Due Date': 'நிலுவைத் தேதி',
    'Taxable Amount': 'வரிக்குட்பட்ட தொகை',
    'GST Amount': 'ஜிஎஸ்டி தொகை',
    'Total Amount': 'மொத்தத் தொகை',
    'Subtotal': 'துணை மொத்தம்',
    'Tax': 'வரி',
    'Total': 'மொத்தம்',
    'Role': 'பொறுப்பு',
    'Joined On': 'சேர்ந்த தேதி',
    'Last Active': 'கடைசியாகச் செயல்பட்டது',
    'Timestamp': 'நேரம்',
    'User': 'பயனர்',
    'Activity': 'செயல்பாடு',
    'Details': 'விவரங்கள்',
    'IP Address': 'ஐபி முகவரி',
    'Device': 'சாதனம்',
    'Severity': 'தீவிரம்',

    // Action Buttons
    '+ Add Product': '+ தயாரிப்பு சேர்',
    '+ New Sale': '+ புதிய விற்பனை',
    '+ New Purchase': '+ புதிய கொள்முதல்',
    '+ New Customer': '+ புதிய வாடிக்கையாளர்',
    '+ New Supplier': '+ புதிய விற்பனையாளர்',
    '+ Create Invoice': '+ விலைப்பட்டியல் உருவாக்கு',
    'Save': 'சேமிக்க',
    'Save Changes': 'மாற்றங்களைச் சேமிக்கவும்',
    'Cancel': 'ரத்துசெய்',
    'Edit': 'திருத்து',
    'Delete': 'நீக்கு',
    'Remove': 'அகற்று',
    'View': 'காண்க',
    'View Details': 'விவரங்களைக் காண்க',
    'Filter': 'வடிகட்டு',
    'Reset Filters': 'வடிகட்டிகளை மீட்டமை',
    'Clear': 'அழிக்க',
    'Search': 'தேடுக',
    'Export': 'ஏற்றுமதி செய்க',
    'Export Data': 'தரவை ஏற்றுமதி செய்க',
    'Export CSV': 'CSV ஏற்றுமதி செய்க',
    'Download': 'பதிவிறக்கு',
    'Download PDF': 'PDF பதிவிறக்குக',
    'Print': 'அச்சிடுக',
    'Print Invoice': 'விலைப்பட்டியல் அச்சிடுக',
    'Close': 'மூடுக',
    'Back': 'பின்செல்',
    'Next': 'அடுத்து',
    'Submit': 'சமர்ப்பி',
    'Apply': 'பயன்படுத்து',
    'Confirm': 'உறுதிப்படுத்து',
    'Refresh': 'புதுப்பி',
    'Add User': 'புதிய பயனர் சேர்',
    'Add New User': 'புதிய பயனரைச் சேர்க்கவும்',
    'Manage Roles': 'பொறுப்புகளை நிர்வகி',
    'View Logs': 'பதிவுகளைக் காண்க',
    'Calculate GST': 'ஜிஎஸ்டி கணக்கிடு',
    'Factory System Reset': 'கணினி மீட்டமைப்பு',
    'Save Preferences': 'விருப்பங்களைச் சேமிக்கவும்',
    'Save Profile': 'சுயவிவரத்தைச் சேமிக்கவும்',
    'Authorize & Reset': 'அங்கீகரித்து மீட்டமை',

    // Statuses & Badges
    'Paid': 'செலுத்தப்பட்டது',
    'Pending': 'நிலுவையில்',
    'Overdue': 'காலாவதியானது',
    'Active': 'செயலில்',
    'Inactive': 'செயலற்றது',
    'Healthy': 'சீரானது',
    'Low Stock': 'குறைந்த இருப்பு',
    'Out of Stock': 'இருப்பு இல்லை',
    'In Stock': 'இருப்பு உள்ளது',
    'Success': 'வெற்றி',
    'Warning': 'எச்சரிக்கை',
    'Critical': 'ஆபத்தானது',
    'Info': 'தகவல்',
    'High': 'அதிகம்',
    'Medium': 'நடுத்தரம்',
    'Low': 'குறைவு',
    'Optimal': 'உகந்தது',
    'Connected': 'இணைக்கப்பட்டது',

    // Roles
    'Administrator': 'முதன்மை நிர்வாகி',
    'Founder': 'நிறுவனர்',
    'Founder/Executive': 'நிறுவனர் / நிர்வாகி',
    'Co-Founder': 'இணை நிறுவனர்',
    'Sales Manager': 'விற்பனை மேலாளர்',
    'Purchase Manager': 'கொள்முதல் மேலாளர்',
    'Inventory Staff': 'சரக்கு பணியாளர்',
    'Sales Staff': 'விற்பனை பணியாளர்',

    // Admin & Telemetry
    'System Administration & Control Center': 'கணினி நிர்வாகம் மற்றும் கட்டுப்பாட்டு மையம்',
    'Enterprise audit logs, system telemetry, and role-based access management.': 'நிறுவன தணிக்கை பதிவுகள், தொலைநிலை அளவீடுகள் மற்றும் பொறுப்பு மேலாண்மை.',
    'System Health: Optimal': 'கணினி நிலை: உகந்தது',
    'Database Status: Connected (MongoDB)': 'தரவுத்தள நிலை: இணைக்கப்பட்டது (MongoDB)',
    'Active Sessions': 'செயலில் உள்ள அமர்வுகள்',
    'System Uptime': 'கணினி இயக்க நேரம்',
    'User Growth': 'பயனர் வளர்ச்சி',
    'System Activities': 'கணினி செயல்பாடுகள்',
    'User Directory': 'பயனர்கள் பட்டியல்',
    'Activity Audit Trail': 'செயல்பாட்டு தணிக்கை பதிவு',
    'Audit Trail': 'தணிக்கை பதிவு',
    'User Activity Logs': 'பயனர் செயல்பாட்டுப் பதிவுகள்',
    'User Activity Logs & Audit Trail': 'பயனர் செயல்பாட்டுப் பதிவுகள் மற்றும் தணிக்கை பதிவு',
    'Role Permissions Matrix': 'பொறுப்பு அனுமதி அட்டவணை',
    'Role Distribution': 'பொறுப்புகள் விநியோகம்',

    // Settings
    'Workspace Settings': 'பணிவெளி அமைப்புகள்',
    'Manage your personal preferences, business information, and workspace data.': 'உங்கள் விருப்பத்தேர்வுகள் மற்றும் வணிகத் தகவல்களை நிர்வகிக்கவும்.',
    'General': 'பொதுவானவை',
    'Business Profile': 'வணிக சுயவிவரம்',
    'Users & Access': 'பயனர்கள் & அணுகல்',
    'Appearance': 'தோற்றம்',
    'Data & Backup': 'தரவு & காப்புப்பிரதி',
    'Integrations': 'ஒருங்கிணைப்புகள்',
    'Language': 'மொழி',
    'Date Format': 'தேதி வடிவம்',
    'Currency': 'நாணயம்',
    'Time Zone': 'நேர மண்டலம்',
    'Items Per Page': 'ஒரு பக்கத்திற்கான உருப்படிகள்',
    'Theme Mode': 'தீம் முறை',
    'Color Palette': 'வண்ணத் தட்டு',
    'Atmosphere & Density': 'அமைப்பு அடர்த்தி',
    'Authorize System Reset': 'கணினி மீட்டமைப்பை அங்கீகரிக்கவும்',
    'Enter Master Security Key': 'முதன்மை பாதுகாப்புக் குறியீட்டை உள்ளிடவும்',
    'Wipe All Data': 'அனைத்து தரவுகளையும் அழிக்கவும்',

    // GST & Reports
    'GST Compliance & Tax Reports': 'ஜிஎஸ்டி மேலாண்மை மற்றும் வரி அறிக்கைகள்',
    'Overview of GSTR-1, GSTR-3B filings, tax liability, and input tax credit (ITC).': 'GSTR-1, GSTR-3B தாக்கல், வரிப் பொறுப்பு மற்றும் உள்ளீட்டு வரவு மேலோட்டம்.',
    'Tax Liability': 'வரிப் பொறுப்பு',
    'Eligible ITC': 'தகுதியான உள்ளீட்டு வரவு',
    'Net GST Payable': 'செலுத்த வேண்டிய நிகர ஜிஎஸ்டி',
    'GSTR-1 Summary': 'GSTR-1 சுருக்கம்',
    'GSTR-3B Filing': 'GSTR-3B தாக்கல்',
    'Financial & Operational Reports': 'நிதி மற்றும் செயல்பாட்டு அறிக்கைகள்',
    'Comprehensive reports on sales, purchases, inventory valuation, and cash flow.': 'விற்பனை, கொள்முதல், சரக்கு மதிப்பு மற்றும் பணப்புழக்கம் பற்றிய முழுமையான அறிக்கைகள்.',
    'Sales Summary': 'விற்பனை சுருக்கம்',
    'Purchase Summary': 'கொள்முதல் சுருக்கம்',
    'Inventory Valuation': 'சரக்கு இருப்பு மதிப்பீடு',
    'Profit & Loss': 'லாப நஷ்ட அறிக்கை',

    // Business Intelligence & Predictions
    'Business Intelligence & Analytics': 'வணிக நுண்ணறிவு மற்றும் பகுப்பாய்வு',
    'AI Predictive Analytics': 'AI முன்கணிப்பு பகுப்பாய்வு',
    'Demand Forecast': 'தேவை முன்னறிவிப்பு',
    'Predicted Demand': 'கணிக்கப்பட்ட தேவை',
    'High Confidence': 'அதிக நம்பகத்தன்மை',
    'Medium Confidence': 'நடுத்தர நம்பகத்தன்மை',
    'Low Confidence': 'குறைந்த நம்பகத்தன்மை',
    'Restock Recommendations': 'மறு கையிருப்பு பரிந்துரைகள்',
    'Growth Rate': 'வளர்ச்சி விகிதம்',

    // Common phrases & helper words
    'Showing': 'காட்டுகிறது',
    'of': 'இல்',
    'to': 'முதல்',
    'entries': 'பதிவுகள்',
    'records': 'பதிவுகள்',
    'items': 'பொருட்கள்',
    'Units': 'அலகுகள்',
    'Select': 'தேர்ந்தெடுக்கவும்',
    'All': 'அனைத்தும்',
    'Today': 'இன்று',
    'Yesterday': 'நேற்று',
    'This Week': 'இந்த வாரம்',
    'This Month': 'இந்த மாதம்',
    'This Year': 'இந்த ஆண்டு',
    'Yes': 'ஆம்',
    'No': 'இல்லை',
    'Name': 'பெயர்',
    'Full Name': 'முழுப் பெயர்',
    'City': 'நகரம்',
    'Address': 'முகவரி',
    'Notes': 'குறிப்புகள்',
    'Description': 'விளக்கம்',

    // Input Placeholders
    'Search products...': 'தயாரிப்புகளைத் தேடுக...',
    'Search sales...': 'விற்பனையைத் தேடுக...',
    'Search customers...': 'வாடிக்கையாளர்களைத் தேடுக...',
    'Search invoices...': 'விலைப்பட்டியல்களைத் தேடுக...',
    'Search suppliers...': 'விற்பனையாளர்களைத் தேடுக...',
    'Search logs...': 'பதிவுகளைத் தேடுக...',
    'Enter product name': 'தயாரிப்பு பெயரை உள்ளிடவும்',
    'Enter customer name': 'வாடிக்கையாளர் பெயரை உள்ளிடவும்',
    'Enter supplier name': 'விற்பனையாளர் பெயரை உள்ளிடவும்',
    'Enter phone number': 'தொலைபேசி எண்ணை உள்ளிடவும்',
    'Enter email': 'மின்னஞ்சலை உள்ளிடவும்',
    'Enter price': 'விலையை உள்ளிடவும்',
    'Enter quantity': 'அளவை உள்ளிடவும்',
  },

  Malayalam: {
    // App Shell & Branding
    'MSME Smart': 'എംഎസ്എംഇ സ്മാർട്ട്',
    'Smarter Decisions. Stronger MSMEs.': 'മികച്ച തീരുമാനങ്ങൾ. ശക്തമായ എംഎസ്എംഇ.',

    // Navigation Items
    'Dashboard': 'ഡാഷ്‌ബോർഡ്',
    'Inventory': 'ഇൻവെന്ററി',
    'Add Product': 'ഉൽപ്പന്നം ചേർക്കുക',
    'Sales': 'വിൽപ്പന',
    'New Sale': 'പുതിയ വിൽപ്പന',
    'Purchases': 'വാങ്ങലുകൾ',
    'New Purchase': 'പുതിയ വാങ്ങൽ',
    'Customers': 'ഉപഭോക്താക്കൾ',
    'New Customer': 'പുതിയ ഉപഭോക്താവ്',
    'Suppliers': 'വിതരണക്കാർ',
    'New Supplier': 'പുതിയ വിതരണക്കാരൻ',
    'Invoices': 'ഇൻവോയ്സുകൾ',
    'Create Invoice': 'ഇൻവോയ്സ് ഉണ്ടാക്കുക',
    'GST': 'ജിഎസ്ടി',
    'GST Compliance': 'ജിഎസ്ടി പാലനം',
    'Reports': 'റിപ്പോർട്ടുകൾ',
    'Business Intelligence': 'ബിസിനസ് ഇന്റലിജൻസ്',
    'Predictions': 'പ്രവചനങ്ങൾ',
    'Recommendations': 'നിർദ്ദേശങ്ങൾ',
    'Settings': 'ക്രമീകരണങ്ങൾ',
    'Admin': 'അഡ്മിൻ',
    'Logout': 'ലോഗ്ഔട്ട്',

    // Topbar
    'Search customers, invoices, products...': 'ഉപഭോക്താക്കൾ, ഇൻവോയ്‌സുകൾ, ഉൽപ്പന്നങ്ങൾ തിരയുക...',
    'Switch Staff': 'സ്റ്റാഫ് മാറ്റുക',
    'Notifications': 'അറിയിപ്പുകൾ',
    'Mark all as read': 'എല്ലാം വായിച്ചതായി അടയാളപ്പെടുത്തുക',
    'View All Notifications': 'എല്ലാ അറിയിപ്പുകളും കാണുക',
    'No notifications': 'അറിയിപ്പുകൾ ഒന്നുമില്ല',
    'Logged in as': 'ലോഗിൻ ചെയ്തത്',

    // Dashboard Overview
    'Business Dashboard': 'ബിസിനസ് ഡാഷ്‌ബോർഡ്',
    'Monitor your sales, inventory and customer health at a glance.': 'നിങ്ങളുടെ വിൽപ്പനയും സ്റ്റോക്കും ഉപഭോക്തൃ വിവരങ്ങളും ഒറ്റനോട്ടത്തിൽ നിരീക്ഷിക്കുക.',
    'ENTERPRISE OVERVIEW': 'പൊതു അവലോകനം',
    'Compare Months': 'മാസങ്ങൾ താരതമ്യം ചെയ്യുക',
    'Products': 'ഉൽപ്പന്നങ്ങൾ',
    'Stock on hand': 'കൈവശമുള്ള സ്റ്റോക്ക്',
    'Total Sales': 'ആകെ വിൽപ്പന',
    'Active Customers': 'സജീവ ഉപഭോക്താക്കൾ',
    'Sales Trend': 'വിൽപ്പന പ്രവണത',
    'Revenue performance over time': 'വരുമാന പ്രകടനം',
    'Stock Alerts': 'സ്റ്റോക്ക് മുന്നറിയിപ്പുകൾ',
    'Customer Overview': 'ഉപഭോക്തൃ അവലോകനം',
    'View all customers →': 'എല്ലാ ഉപഭോക്താക്കളെയും കാണുക →',
    'View all inventory alerts →': 'എല്ലാ മുന്നറിയിപ്പുകളും കാണുക →',
    'Recent Transactions': 'സമീപകാല ഇടപാടുകൾ',
    'Quick Actions': 'ദ്രുത പ്രവർത്തനങ്ങൾ',
    'Top Selling Products': 'കൂടുതൽ വിറ്റഴിക്കപ്പെടുന്ന ഉൽപ്പന്നങ്ങൾ',
    'Month-on-Month Comparison': 'മാസം തോറുമുള്ള താരതമ്യം',
    'Total Revenue': 'ആകെ വരുമാനം',
    'Total Profit': 'ആകെ ലാഭം',
    'Gross Margin': 'മൊത്തം മാർജിൻ',
    'Orders Count': 'ഓർഡറുകളുടെ എണ്ണം',

    // Table Columns & Data Labels
    'Product Name': 'ഉൽപ്പന്നത്തിന്റെ പേര്',
    'SKU': 'എസ്‌കെയു',
    'Category': 'വിഭാഗം',
    'Stock Level': 'സ്റ്റോക്ക് ലെവൽ',
    'Stock': 'സ്റ്റോക്ക്',
    'Price': 'വില',
    'Unit Price': 'യൂണിറ്റ് വില',
    'Quantity': 'അളവ്',
    'Total Value': 'ആകെ മൂല്യം',
    'Reorder Level': 'റീഓർഡർ ലെവൽ',
    'Actions': 'പ്രവർത്തനങ്ങൾ',
    'Action': 'പ്രവർത്തനം',
    'ID': 'ഐഡി',
    'Contact Details': 'ബന്ധപ്പെടേണ്ട വിവരങ്ങൾ',
    'Minimum Rating': 'കുറഞ്ഞ റേറ്റിംഗ്',
    '4.5★ and above': '4.5★ ഉം അതിൽ കൂടുതലും',
    '4.0★ and above': '4.0★ ഉം അതിൽ കൂടുതലും',
    '3.5★ and above': '3.5★ ഉം അതിൽ കൂടുതലും',
    'All Ratings': 'എല്ലാ റേറ്റിംഗുകളും',
    'All Categories': 'എല്ലാ വിഭാഗങ്ങളും',
    'No suppliers match your filter criteria': 'നിങ്ങളുടെ ഫിൽട്ടർ മാനദണ്ഡങ്ങളുമായി പൊരുത്തപ്പെടുന്ന വിതരണക്കാരൊന്നുമില്ല',
    'Status': 'അവസ്ഥ',
    'Order ID': 'ഓർഡർ ഐഡി',
    'Purchase ID': 'പർച്ചേസ് ഐഡി',
    'Customer / Shop': 'ഉപഭോക്താവ് / കട',
    'Customer Name': 'ഉപഭോക്താവിന്റെ പേര്',
    'Contact Person': 'ബന്ധപ്പെടേണ്ട വ്യക്തി',
    'Phone': 'ഫോൺ',
    'Phone Number': 'ഫോൺ നമ്പർ',
    'Email': 'ഇമെയിൽ',
    'Email Address': 'ഇമെയിൽ വിലാസം',
    'Location': 'സ്ഥലം',
    'GSTIN': 'ജിഎസ്ടി നമ്പർ',
    'Credit Limit': 'ക്രെഡിറ്റ് പരിധി',
    'Balance': 'ബാക്കി തുക',
    'Outstanding Balance': 'കുടിശ്ശിക തുക',
    'Supplier / Company': 'വിതരണക്കാരൻ / കമ്പനി',
    'Supplier Name': 'വിതരണക്കാരന്റെ പേര്',
    'Rating': 'റേറ്റിംഗ്',
    'Invoice #': 'ഇൻവോയ്സ് നമ്പർ',
    'Invoice Date': 'ഇൻവോയ്സ് തീയതി',
    'Due Date': 'അടയ്ക്കേണ്ട തീയതി',
    'Taxable Amount': 'നികുതി വിധേയമായ തുക',
    'GST Amount': 'ജിഎസ്ടി തുക',
    'Total Amount': 'ആകെ തുക',
    'Subtotal': 'ഉപതുക',
    'Tax': 'നികുതി',
    'Total': 'ആകെ',
    'Role': 'റോൾ',
    'Joined On': 'ചേർന്ന തീയതി',
    'Last Active': 'അവസാനം സജീവം',
    'Timestamp': 'സമയം',
    'User': 'ഉപയോക്താവ്',
    'Activity': 'പ്രവർത്തനം',
    'Details': 'വിവരങ്ങൾ',
    'IP Address': 'ഐപി വിലാസം',
    'Device': 'ഉപകരണം',
    'Severity': 'തീവ്രത',

    // Action Buttons
    '+ Add Product': '+ ഉൽപ്പന്നം ചേർക്കുക',
    '+ New Sale': '+ പുതിയ വിൽപ്പന',
    '+ New Purchase': '+ പുതിയ വാങ്ങൽ',
    '+ New Customer': '+ പുതിയ ഉപഭോക്താവ്',
    '+ New Supplier': '+ പുതിയ വിതരണക്കാരൻ',
    '+ Create Invoice': '+ ഇൻവോയ്സ് ഉണ്ടാക്കുക',
    'Save': 'സൂക്ഷിക്കുക',
    'Save Changes': 'മാറ്റങ്ങൾ സൂക്ഷിക്കുക',
    'Cancel': 'റദ്ദാക്കുക',
    'Edit': 'മാറ്റം വരുത്തുക',
    'Delete': 'ഡിലീറ്റ് ചെയ്യുക',
    'Remove': 'നീക്കം ചെയ്യുക',
    'View': 'കാണുക',
    'View Details': 'വിവരങ്ങൾ കാണുക',
    'Filter': 'ഫിൽട്ടർ',
    'Reset Filters': 'ഫിൽട്ടറുകൾ മാറ്റുക',
    'Clear': 'മായ്ക്കുക',
    'Search': 'തിരയുക',
    'Export': 'എക്സ്പോർട്ട് ചെയ്യുക',
    'Export Data': 'ഡാറ്റ എക്സ്പോർട്ട് ചെയ്യുക',
    'Export CSV': 'CSV എക്സ്പോർട്ട് ചെയ്യുക',
    'Download': 'ഡൗൺലോഡ് ചെയ്യുക',
    'Download PDF': 'PDF ഡൗൺലോഡ് ചെയ്യുക',
    'Print': 'പ്രിന്റ് ചെയ്യുക',
    'Print Invoice': 'ഇൻവോയ്സ് പ്രിന്റ് ചെയ്യുക',
    'Close': 'അടയ്ക്കുക',
    'Back': 'പിന്നോട്ട്',
    'Next': 'അടുത്തത്',
    'Submit': 'സമർപ്പിക്കുക',
    'Apply': 'പ്രയോഗിക്കുക',
    'Confirm': 'സ്ഥിരീകരിക്കുക',
    'Refresh': 'പുതുക്കുക',
    'Add User': 'ഉപയോക്താവിനെ ചേർക്കുക',
    'Add New User': 'പുതിയ ഉപയോക്താവിനെ ചേർക്കുക',
    'Manage Roles': 'റോളുകൾ കൈകാര്യം ചെയ്യുക',
    'View Logs': 'ലോഗുകൾ കാണുക',
    'Calculate GST': 'ജിഎസ്ടി കണക്കാക്കുക',
    'Factory System Reset': 'സിസ്റ്റം പുനഃസ്ഥാപിക്കുക',
    'Save Preferences': 'മുൻഗണനകൾ സേവ് ചെയ്യുക',
    'Save Profile': 'പ്രൊഫൈൽ സേവ് ചെയ്യുക',
    'Authorize & Reset': 'റീസെറ്റ് ചെയ്യുക',

    // Statuses & Badges
    'Paid': 'പണമടച്ചു',
    'Pending': 'ബാക്കി',
    'Overdue': 'കാലഹരണപ്പെട്ടു',
    'Active': 'സജീവം',
    'Inactive': 'നിഷ്‌ക്രിയം',
    'Healthy': 'തൃപ്തികരം',
    'Low Stock': 'കുറഞ്ഞ സ്റ്റോക്ക്',
    'Out of Stock': 'സ്റ്റോക്ക് തീർന്നു',
    'In Stock': 'സ്റ്റോക്ക് ലഭ്യമാണ്',
    'Success': 'വിജയം',
    'Warning': 'മുന്നറിയിപ്പ്',
    'Critical': 'ഗുരുതരം',
    'Info': 'വിവരം',
    'High': 'ഉയർന്ന',
    'Medium': 'ഇടത്തരം',
    'Low': 'കുറഞ്ഞ',
    'Optimal': 'അനുയോജ്യം',
    'Connected': 'ബന്ധിപ്പിച്ചു',

    // Roles
    'Administrator': 'അഡ്മിനിസ്ട്രേറ്റർ',
    'Founder': 'സ്ഥാപകൻ',
    'Founder/Executive': 'സ്ഥാപകൻ / എക്സിക്യൂട്ടീവ്',
    'Co-Founder': 'സഹസ്ഥാപകൻ',
    'Sales Manager': 'വിൽപ്പന മാനേജർ',
    'Purchase Manager': 'പർച്ചേസ് മാനേജർ',
    'Inventory Staff': 'ഇൻവെന്ററി സ്റ്റാഫ്',
    'Sales Staff': 'വിൽപ്പന ജീവനക്കാർ',

    // Admin & Telemetry
    'System Administration & Control Center': 'സിസ്റ്റം അഡ്മിനിസ്ട്രേഷനും കൺട്രോൾ സെന്ററും',
    'Enterprise audit logs, system telemetry, and role-based access management.': 'എന്റർപ്രൈസ് ഓഡിറ്റ് ലോഗുകൾ, സിസ്റ്റം ടെലിമെട്രി, റോൾ ആക്സസ് മാനേജ്മെന്റ്.',
    'System Health: Optimal': 'സിസ്റ്റം ആരോഗ്യം: അനുയോജ്യം',
    'Database Status: Connected (MongoDB)': 'ഡാറ്റാബേസ് അവസ്ഥ: ബന്ധിപ്പിച്ചു (MongoDB)',
    'Active Sessions': 'സജീവ സെഷനുകൾ',
    'System Uptime': 'സിസ്റ്റം പ്രവർത്തന സമയം',
    'User Growth': 'ഉപയോക്തൃ വളർച്ച',
    'System Activities': 'സിസ്റ്റം പ്രവർത്തനങ്ങൾ',
    'User Directory': 'ഉപയോക്താക്കളുടെ പട്ടിക',
    'Activity Audit Trail': 'പ്രവർത്തന ഓഡിറ്റ് ട്രയൽ',
    'Audit Trail': 'ഓഡിറ്റ് ട്രയൽ',
    'User Activity Logs': 'ഉപയോക്തൃ പ്രവർത്തന ലോഗുകൾ',
    'User Activity Logs & Audit Trail': 'ഉപയോക്തൃ പ്രവർത്തന ലോഗുകളും ഓഡിറ്റ് ട്രയലും',
    'Role Permissions Matrix': 'റോൾ പെർമിഷൻ മാട്രിക്സ്',
    'Role Distribution': 'റോൾ വിതരണം',

    // Settings
    'Workspace Settings': 'ക്രമീകരണങ്ങൾ',
    'Manage your personal preferences, business information, and workspace data.': 'നിങ്ങളുടെ മുൻഗണനകളും ബിസിനസ്സ് വിവരങ്ങളും നിയന്ത്രിക്കുക.',
    'General': 'പൊതുവായത്',
    'Business Profile': 'ബിസിനസ് പ്രൊഫൈൽ',
    'Users & Access': 'ഉപയോക്താക്കൾ & പ്രവേശനം',
    'Appearance': 'രൂപഭംഗി',
    'Data & Backup': 'ഡാറ്റ & ബാക്കപ്പ്',
    'Integrations': 'സംയോജനങ്ങൾ',
    'Language': 'ഭാഷ',
    'Date Format': 'തീയതി ഫോർമാറ്റ്',
    'Currency': 'കറൻസി',
    'Time Zone': 'ടൈം സോൺ',
    'Items Per Page': 'ഓരോ പേജിലെയും ഇനങ്ങൾ',
    'Theme Mode': 'തീം മോഡ്',
    'Color Palette': 'കളർ പാലറ്റ്',
    'Atmosphere & Density': 'സാന്ദ്രത ക്രമീകരണം',
    'Authorize System Reset': 'സിസ്റ്റം റീസെറ്റ് അനുവദിക്കുക',
    'Enter Master Security Key': 'മാസ്റ്റർ സുരക്ഷാ കീ നൽകുക',
    'Wipe All Data': 'എല്ലാ വിവരങ്ങളും മായ്ക്കുക',

    // GST & Reports
    'GST Compliance & Tax Reports': 'ജിഎസ്ടി പാലനവും നികുതി റിപ്പോർട്ടുകളും',
    'Overview of GSTR-1, GSTR-3B filings, tax liability, and input tax credit (ITC).': 'GSTR-1, GSTR-3B ഫയലിംഗുകൾ, നികുതി ബാധ്യത, ഇൻപുട്ട് ടാക്സ് ക്രെഡിറ്റ് എന്നിവയുടെ അവലോകനം.',
    'Tax Liability': 'നികുതി ബാധ്യത',
    'Eligible ITC': 'അർഹമായ ഐ.ടി.സി',
    'Net GST Payable': 'നൽകേണ്ട അറ്റ ജിഎസ്ടി',
    'GSTR-1 Summary': 'GSTR-1 സംഗ്രഹം',
    'GSTR-3B Filing': 'GSTR-3B ഫയലിംഗ്',
    'Financial & Operational Reports': 'ധനകാര്യ-പ്രവർത്തന റിപ്പോർട്ടുകൾ',
    'Comprehensive reports on sales, purchases, inventory valuation, and cash flow.': 'വിൽപ്പന, പർച്ചേസ്, ഇൻവെന്ററി മൂല്യം, പണമിടപാടുകൾ എന്നിവയെക്കുറിച്ചുള്ള റിപ്പോർട്ടുകൾ.',
    'Sales Summary': 'വിൽപ്പന സംഗ്രഹം',
    'Purchase Summary': 'പർച്ചേസ് സംഗ്രഹം',
    'Inventory Valuation': 'ഇൻവെന്ററി മൂല്യനിർണ്ണയം',
    'Profit & Loss': 'ലാഭ-നഷ്ട കണക്ക്',

    // Business Intelligence & Predictions
    'Business Intelligence & Analytics': 'ബിസിനസ് ഇന്റലിജൻസും അനലിറ്റിക്സും',
    'AI Predictive Analytics': 'AI പ്രവചന അനലിറ്റിക്സ്',
    'Demand Forecast': 'ഡിമാൻഡ് പ്രവചനം',
    'Predicted Demand': 'പ്രവചിച്ച ഡിമാൻഡ്',
    'High Confidence': 'ഉയർന്ന കൃത്യത',
    'Medium Confidence': 'ഇടത്തരം കൃത്യത',
    'Low Confidence': 'കുറഞ്ഞ കൃത്യത',
    'Restock Recommendations': 'പുനഃസംഭരണ ശുപാർശകൾ',
    'Growth Rate': 'വളർച്ചാ നിരക്ക്',

    // Common phrases & helper words
    'Showing': 'കാണിക്കുന്നു',
    'of': 'ൽ',
    'to': 'മുതൽ',
    'entries': 'എൻട്രികൾ',
    'records': 'റെക്കോർഡുകൾ',
    'items': 'ഇനങ്ങൾ',
    'Units': 'യൂണിറ്റുകൾ',
    'Select': 'തിരഞ്ഞെടുക്കുക',
    'All': 'എല്ലാം',
    'Today': 'ഇന്ന്',
    'Yesterday': 'ഇന്നലെ',
    'This Week': 'ഈ ആഴ്ച',
    'This Month': 'ഈ മാസം',
    'This Year': 'ഈ വർഷം',
    'Yes': 'അതെ',
    'No': 'അല്ല',
    'Name': 'പേര്',
    'Full Name': 'മുഴുവൻ പേര്',
    'City': 'നഗരം',
    'Address': 'വിലാസം',
    'Notes': 'കുറിപ്പുകൾ',
    'Description': 'വിവരണം',

    // Input Placeholders
    'Search products...': 'ഉൽപ്പന്നങ്ങൾ തിരയുക...',
    'Search sales...': 'വിൽപ്പന തിരയുക...',
    'Search customers...': 'ഉപഭോക്താക്കളെ തിരയുക...',
    'Search invoices...': 'ഇൻവോയ്സുകൾ തിരയുക...',
    'Search suppliers...': 'വിതരണക്കാരെ തിരയുക...',
    'Search logs...': 'ലോഗുകൾ തിരയുക...',
    'Enter product name': 'ഉൽപ്പന്നത്തിന്റെ പേര് നൽകുക',
    'Enter customer name': 'ഉപഭോക്താവിന്റെ പേര് നൽകുക',
    'Enter supplier name': 'വിതരണക്കാരന്റെ പേര് നൽകുക',
    'Enter phone number': 'ഫോൺ നമ്പർ നൽകുക',
    'Enter email': 'ഇമെയിൽ നൽകുക',
    'Enter price': 'വില നൽകുക',
    'Enter quantity': 'അളവ് നൽകുക',
  }
};

// Internal caches for O(1) matching and longest-phrase-first regex replacement
const lowerDictCache: Record<string, Record<string, string>> = {};
const sortedPhrasesCache: Record<string, { phrase: string; translation: string; regex: RegExp }[]> = {};

function getLowerDict(lang: Exclude<SupportedLanguage, 'English'>): Record<string, string> {
  if (lowerDictCache[lang]) return lowerDictCache[lang];
  const dict = ERP_TRANSLATION_DICTIONARY[lang] || {};
  const lower: Record<string, string> = {};
  for (const [k, v] of Object.entries(dict)) {
    lower[k.toLowerCase()] = v;
  }
  lowerDictCache[lang] = lower;
  return lower;
}

function getSortedPhrases(lang: Exclude<SupportedLanguage, 'English'>): { phrase: string; translation: string; regex: RegExp }[] {
  if (sortedPhrasesCache[lang]) return sortedPhrasesCache[lang];
  const dict = ERP_TRANSLATION_DICTIONARY[lang] || {};
  const entries = Object.entries(dict);
  // Sort longest phrase first so compound phrases match before single words
  entries.sort((a, b) => b[0].length - a[0].length);
  const compiled = entries.map(([phrase, translation]) => {
    // Escape regex characters
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // If it starts with non-word character (like '+ ' or '★ '), match literally
    const regex = new RegExp(`(^|\\s|[.,;()\\-])${escaped}($|\\s|[.,;()\\-])`, 'gi');
    return { phrase, translation, regex };
  });
  sortedPhrasesCache[lang] = compiled;
  return compiled;
}

/**
 * Translates a single text string from English to the target language
 */
export function translateString(text: string, lang: SupportedLanguage): string {
  if (lang === 'English') return text;
  if (!text || !text.trim()) return text;

  const trimmed = text.trim();

  // If text is purely numeric, dates, symbols, emails, or phone numbers, don't modify
  if (/^[\d\s₹$€£%.,+\-/:#*|&()]+$/.test(trimmed)) return text;
  if (/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(trimmed)) return text;

  const dict = ERP_TRANSLATION_DICTIONARY[lang];
  if (!dict) return text;

  // 1. Direct exact match
  if (dict[trimmed]) {
    return text.replace(trimmed, dict[trimmed]);
  }

  // 2. Direct case-insensitive match
  const lower = getLowerDict(lang);
  const lowerTrimmed = trimmed.toLowerCase();
  if (lower[lowerTrimmed]) {
    return text.replace(trimmed, lower[lowerTrimmed]);
  }

  // 3. Handle prefixes / suffixes (+, ★, :, →, etc.)
  if (trimmed.startsWith('+ ') && dict[trimmed.slice(2)]) {
    return text.replace(trimmed, '+ ' + dict[trimmed.slice(2)]);
  }
  if (trimmed.startsWith('+') && dict[trimmed.slice(1)]) {
    return text.replace(trimmed, '+' + dict[trimmed.slice(1)]);
  }
  if (trimmed.endsWith(' →') && dict[trimmed.slice(0, -2)]) {
    return text.replace(trimmed, dict[trimmed.slice(0, -2)] + ' →');
  }
  if (trimmed.endsWith(':') && dict[trimmed.slice(0, -1)]) {
    return text.replace(trimmed, dict[trimmed.slice(0, -1)] + ':');
  }
  if (trimmed.startsWith('★ ') && dict[trimmed.slice(2)]) {
    return text.replace(trimmed, '★ ' + dict[trimmed.slice(2)]);
  }

  // 4. Multi-word phrase replacement for sentences or compound text
  const sorted = getSortedPhrases(lang);
  let result = text;
  let hasReplaced = false;

  for (const { phrase, translation } of sorted) {
    if (phrase.length <= 2) continue; // Skip tiny single characters in phrase pass
    if (result.toLowerCase().includes(phrase.toLowerCase())) {
      const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const reg = new RegExp(`(^|\\s|[.,;()\\-])${escaped}($|\\s|[.,;()\\-])`, 'gi');
      result = result.replace(reg, (_match, p1, p2) => `${p1}${translation}${p2}`);
      hasReplaced = true;
    }
  }

  return hasReplaced ? result : text;
}

/**
 * DOM Text and Attribute Lossless Storage
 * Stores the pristine English text on nodes so changing back to English or switching between languages is 100% lossless.
 */
const textNodeOriginalMap = new WeakMap<Node, string>();
const attrOriginalMap = new WeakMap<Element, Record<string, string>>();

let isTranslating = false;
let wholePageObserver: MutationObserver | null = null;
let scheduledFrame: number | null = null;

function shouldSkipElement(element: Element | null): boolean {
  if (!element) return false;
  const tagName = element.tagName.toUpperCase();
  if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'PATH', 'CODE', 'PRE'].includes(tagName)) {
    return true;
  }
  if (element.hasAttribute('data-no-translate')) {
    return true;
  }
  if (element.getAttribute('contenteditable') === 'true') {
    return true;
  }
  return false;
}

/**
 * Determines whether an element is an authorized Heading, Navigation, Button, Label, or UI Chrome element.
 * STRICTLY returns false for all data names (customer names, product names, supplier names, user names,
 * table cell data rows, email addresses, phone numbers, notes, street addresses, etc.)
 */
export function isHeadingOrUIElement(element: Element | null): boolean {
  if (!element) return false;

  // 1. Table cell (<td>) handling:
  // Data in table body rows (customer name, product name, supplier name, user name, prices, etc.) MUST NOT be translated.
  const td = element.closest('td');
  if (td) {
    // Only allow if it is an explicit interactive button inside the cell (e.g. Edit, Delete, View)
    if (element.tagName === 'BUTTON' || element.closest('button')) {
      return true;
    }
    // Or if it is an empty table placeholder state
    if (element.closest('.table-empty-state') || element.closest('.table-empty-td') || element.closest('.empty-state')) {
      return true;
    }
    // Or if it is a status badge (e.g. Paid, Pending, Overdue, Active, Inactive)
    if (element.classList && (
      element.classList.contains('badge') ||
      element.classList.contains('status-badge') ||
      element.classList.contains('status-pill')
    )) {
      return true;
    }
    // All other content in table cells is DATA NAME / DATA VALUE -> DO NOT TRANSLATE!
    return false;
  }

  // 2. Alert / Widget item data names:
  // In Dashboard stock alerts or customer lists, bold names like <b>Cotton Yarn 40s</b> or <b>Sri Krishna Textiles</b> are data names
  if (element.closest('.alert')) {
    if (element.tagName === 'B' || element.tagName === 'STRONG') {
      const text = (element.textContent || '').trim();
      if (text !== 'Inventory Healthy') {
        return false; // Skip product data name
      }
    }
  }

  // 3. Search result item data (e.g. product name, customer name in search dropdown)
  if (element.closest('.search-result-item')) {
    if (element.classList && element.classList.contains('search-result-badge')) {
      return true;
    }
    return false; // Skip data name
  }

  // 4. Dropdown options:
  // Only translate options that are UI labels/headings (All, Categories, Statuses, Languages)
  if (element.tagName === 'OPTION') {
    const text = (element.textContent || '').trim();
    const allowedOptionHeadings = [
      'All', 'All Categories', 'All Ratings', 'All Statuses', 'All Types',
      'Paid', 'Pending', 'Overdue', 'Active', 'Inactive',
      'English', 'Hindi', 'Tamil', 'Malayalam',
      '4.5★ and above', '4.0★ and above', '3.5★ and above',
      'Low Stock Only', 'In Stock Only', 'Out of Stock'
    ];
    return allowedOptionHeadings.some(h => h.toLowerCase() === text.toLowerCase());
  }

  // 5. Standard Heading elements:
  const tagName = element.tagName.toUpperCase();
  if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(tagName)) {
    return true;
  }

  // 6. Table Header Cells:
  if (tagName === 'TH' || element.closest('th') || element.closest('thead')) {
    return true;
  }

  // 7. Navigation & App Shell Chrome:
  if (['NAV', 'HEADER', 'ASIDE'].includes(tagName)) {
    return true;
  }
  if (element.closest('nav') || element.closest('.sidebar') || element.closest('.topbar') || element.closest('.brand')) {
    return true;
  }

  // 8. Buttons & Interactive Controls:
  if (tagName === 'BUTTON' || element.closest('button') || element.classList.contains('btn') || element.classList.contains('tool-btn')) {
    return true;
  }

  // 9. Form Labels & Field Headers:
  if (tagName === 'LABEL' || element.closest('label') || element.classList.contains('field-label') || element.classList.contains('form-label')) {
    return true;
  }

  // 10. Card Titles, Metric Headers, Eyebrows & Subtitles:
  const className = typeof element.className === 'string' ? element.className : '';
  if (/(?:^|\s)(?:eyebrow|dash-title|dash-subtitle|stat-label|stat-title|kpi-title|metric-label|card-title|card-sub|section-title|header-title|page-title|modal-title|dialog-title|dialog-desc|table-title|notif-title|notif-time|pill-label|filter-title|sub-title|panel-head|panel-title)(?:\s|$)/i.test(className)) {
    return true;
  }

  // 11. Tabs:
  if (element.closest('.tab') || element.closest('.tabs') || element.closest('.notif-tabs') || element.closest('.search-tabs') || element.closest('.settings-nav')) {
    return true;
  }

  // 12. Modal & Dialog headers, footers & titles:
  if (element.closest('.modal-header') || element.closest('.modal-footer') || element.closest('.dialog-header') || element.closest('.dialog-footer')) {
    return true;
  }

  // 13. Subtitles / descriptions directly under header-title, page-title, or modal-header:
  const parent = element.parentElement;
  if (parent) {
    const parentClass = typeof parent.className === 'string' ? parent.className : '';
    if (/(?:^|\s)(?:header-title|page-title|dash-head|modal-header|modal-head|dialog-header|panel-head|stat-card|field)(?:\s|$)/i.test(parentClass)) {
      if (['P', 'SPAN', 'STRONG', 'SMALL', 'DIV'].includes(tagName)) {
        return true;
      }
    }
  }

  return false;
}

function translateTextNode(node: Node, lang: SupportedLanguage) {
  if (!node.nodeValue) return;

  // Retrieve or record original English text
  let original = textNodeOriginalMap.get(node);
  if (original === undefined) {
    original = node.nodeValue;
    textNodeOriginalMap.set(node, original);
  }

  if (lang === 'English') {
    if (node.nodeValue !== original) {
      node.nodeValue = original;
    }
  } else {
    const translated = translateString(original, lang);
    if (translated !== node.nodeValue) {
      node.nodeValue = translated;
    }
  }
}

function translateElementAttributes(element: Element, lang: SupportedLanguage) {
  if (shouldSkipElement(element)) return;

  let originalAttrs = attrOriginalMap.get(element);
  if (!originalAttrs) {
    originalAttrs = {};
    if (element.hasAttribute('placeholder')) {
      originalAttrs['placeholder'] = element.getAttribute('placeholder') || '';
    }
    if (element.hasAttribute('title')) {
      originalAttrs['title'] = element.getAttribute('title') || '';
    }
    if (element.hasAttribute('aria-label')) {
      originalAttrs['aria-label'] = element.getAttribute('aria-label') || '';
    }
    attrOriginalMap.set(element, originalAttrs);
  }

  const attrsToTranslate = ['placeholder', 'title', 'aria-label'] as const;
  for (const attr of attrsToTranslate) {
    if (originalAttrs[attr] !== undefined) {
      const originalVal = originalAttrs[attr];
      if (lang === 'English') {
        if (element.getAttribute(attr) !== originalVal) {
          element.setAttribute(attr, originalVal);
        }
      } else {
        const translatedVal = translateString(originalVal, lang);
        if (element.getAttribute(attr) !== translatedVal) {
          element.setAttribute(attr, translatedVal);
        }
      }
    }
  }
}

function walkAndTranslate(rootNode: Node, lang: SupportedLanguage) {
  if (rootNode.nodeType === Node.TEXT_NODE) {
    const parent = rootNode.parentElement;
    if (parent && !shouldSkipElement(parent)) {
      if (isHeadingOrUIElement(parent)) {
        translateTextNode(rootNode, lang);
      } else {
        // This is a data name (customer name, product name, supplier name, user name, address, etc.)
        // Ensure it stays in its pristine original data value, restoring if previously modified!
        const original = textNodeOriginalMap.get(rootNode);
        if (original !== undefined && rootNode.nodeValue !== original) {
          rootNode.nodeValue = original;
        }
      }
    }
    return;
  }

  if (rootNode.nodeType === Node.ELEMENT_NODE) {
    const el = rootNode as Element;
    if (shouldSkipElement(el)) return;

    translateElementAttributes(el, lang);

    // Recursively process child nodes
    let child = rootNode.firstChild;
    while (child) {
      walkAndTranslate(child, lang);
      child = child.nextSibling;
    }
  }
}

/**
 * Applies the selected language to the whole webpage dynamically.
 * Translates every text node, button, heading, table, badge, modal, and placeholder.
 * Reverts completely to original English when English is selected.
 */
export function applyLanguageToWholePage(lang: SupportedLanguage) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  isTranslating = true;
  try {
    // 1. Update HTML document language attribute
    document.documentElement.setAttribute('lang', lang.toLowerCase());

    // 2. Walk entire visible DOM from body
    walkAndTranslate(document.body, lang);
  } finally {
    // Release lock in next animation frame to prevent recursive observer calls
    requestAnimationFrame(() => {
      isTranslating = false;
    });
  }
}

/**
 * Initializes the Universal ERP Whole-Page DOM Translator and MutationObserver.
 * Watches for route changes, modals opening, tab switches, and dynamically created nodes.
 */
export function initWholePageTranslator() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (wholePageObserver) return; // already initialized

  wholePageObserver = new MutationObserver((mutations) => {
    if (isTranslating) return;

    const currentLang = getCurrentLanguage();
    if (currentLang === 'English') return; // Default English needs no mutation translation

    if (scheduledFrame !== null) {
      cancelAnimationFrame(scheduledFrame);
    }

    scheduledFrame = requestAnimationFrame(() => {
      scheduledFrame = null;
      if (isTranslating) return;

      isTranslating = true;
      try {
        for (const mut of mutations) {
          if (mut.type === 'childList') {
            for (let i = 0; i < mut.addedNodes.length; i++) {
              walkAndTranslate(mut.addedNodes[i], currentLang);
            }
          } else if (mut.type === 'characterData' && mut.target.nodeType === Node.TEXT_NODE) {
            const parent = mut.target.parentElement;
            if (parent && !shouldSkipElement(parent)) {
              translateTextNode(mut.target, currentLang);
            }
          }
        }
      } finally {
        requestAnimationFrame(() => {
          isTranslating = false;
        });
      }
    });
  });

  wholePageObserver.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  // Apply immediately on initialization
  const initialLang = getCurrentLanguage();
  if (initialLang !== 'English') {
    applyLanguageToWholePage(initialLang);
  }
}

// Auto-initialize when window loads in browser
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initWholePageTranslator();
    });
  } else {
    initWholePageTranslator();
  }
}

export function getTranslation(lang: SupportedLanguage, key: string, fallback?: string): string {
  const dict = translations[lang] || translations.English;
  if (dict[key]) return dict[key];
  if (translations.English[key]) return translations.English[key];
  if (lang !== 'English' && fallback) {
    const erpDict = ERP_TRANSLATION_DICTIONARY[lang];
    if (erpDict && erpDict[fallback]) return erpDict[fallback];
  }
  return fallback || key;
}

export function getCurrentLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return 'English';
  const saved = localStorage.getItem('msme_language') as SupportedLanguage;
  if (saved && (saved === 'English' || ERP_TRANSLATION_DICTIONARY[saved as Exclude<SupportedLanguage, 'English'>])) {
    return saved;
  }
  try {
    const prefs = localStorage.getItem('msme_prefs');
    if (prefs) {
      const parsed = JSON.parse(prefs);
      if (parsed.language && (parsed.language === 'English' || ERP_TRANSLATION_DICTIONARY[parsed.language as Exclude<SupportedLanguage, 'English'>])) {
        return parsed.language as SupportedLanguage;
      }
    }
  } catch {}
  try {
    const prefs = localStorage.getItem('msme_workspace_prefs');
    if (prefs) {
      const parsed = JSON.parse(prefs);
      if (parsed.language && (parsed.language === 'English' || ERP_TRANSLATION_DICTIONARY[parsed.language as Exclude<SupportedLanguage, 'English'>])) {
        return parsed.language as SupportedLanguage;
      }
    }
  } catch {}
  return 'English';
}

export function setAppLanguage(lang: SupportedLanguage) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('msme_language', lang);
  try {
    const prefs = localStorage.getItem('msme_prefs');
    const parsed = prefs ? JSON.parse(prefs) : {};
    parsed.language = lang;
    localStorage.setItem('msme_prefs', JSON.stringify(parsed));
  } catch {}
  try {
    const prefs = localStorage.getItem('msme_workspace_prefs');
    const parsed = prefs ? JSON.parse(prefs) : {};
    parsed.language = lang;
    localStorage.setItem('msme_workspace_prefs', JSON.stringify(parsed));
  } catch {}
  document.documentElement.setAttribute('lang', lang.toLowerCase());
  applyLanguageToWholePage(lang);
  window.dispatchEvent(new CustomEvent('msme_language_changed', { detail: lang }));
  window.dispatchEvent(new CustomEvent('msme_prefs_updated', { detail: { language: lang } }));
}
