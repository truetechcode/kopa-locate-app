const STATE_SEC = {
  abia: { id: '', state_name: 'ABIA', address: "NYSC Secretariat, St. Finbarr's Road P.M.B 7225, Umuahia", phone: '08033575318', email: 'abia@nysc.gov.ng' },
  adamawa: { id: '', state_name: 'ADAMAWA', address: "NYSC Secretariat, Federal Government Secretariat, P.M.B 2252, Jimeta-Yola", phone: '08035912897', email: 'adamawa@nysc.gov.ng' },
  akwa_ibom: { id: '', state_name: 'AKWA IBOM', address: "NYSC Secretariat Federal secretariat P.M.B 1087, Uyo", phone: '08034655026', email: 'akwaibom@nysc.gov.ng' },
  anambra: { id: '', state_name: 'ANAMBRA', address: 'NYSC Secretariat 12 Okpora Street P.M.B 4042, Amawbia,Awka', phone: '08033115470', email: 'anambra@nysc.gov.ng' },
  bauchi: { id: '', state_name: 'BAUCHI', address: 'NYSC Secretariat Turaki Abdu Road, Fadamar Mada. PMB 85, Bauch, Bauchi State.', phone: '08036101447', email: 'bauchi@nysc.gov.ng' },
  bayelsa: { id: '', state_name: 'BAYELSA', address: "NYSC Secretariat Block 7, Flat 1-4 Phase II, Civil Service/ FRSC Road , Yenogoa", phone: '08036710943', email: 'bayelsa@nysc.gov.ng' },
  benue: { id: '', state_name: 'BENUE', address: 'NYSC Secretariat: Railway Bye-pass P.M.B 2358, Makurdi', phone: '08037327017', email: 'benue@nysc.gov.ng' },
  borno: { id: '', state_name: 'BORNO', address: 'NYSC Secretariat Kashim Ibrahim Road P.M.B 1124, Maiduguri', phone: '08036833301', email: 'borno@nysc.gov.ng' },
  cross_river: { id: '', state_name: 'CROSS RIVER', address: 'NYSC Secretariat KM 5, Muritala Muhamed Way Ikot Ansa PMB 1148, Calabar', phone: '08038716876', email: 'crossriver@nysc.gov.ng' },
  delta: { id: '', state_name: 'DELTA', address: "NYSC Secretariat Federal Secretariat P.M.B 5004, Asaba", phone: '08033472364', email: 'delta@nysc.gov.ng' },
  ebonyi: { id: '', state_name: 'EBONYI', address: 'NYSC Secretariat :17 Nkwerre Street G.R.A, Abakaliki', phone: '08033931236', email: 'ebonyi@nysc.gov.ng' },
  edo: { id: '', state_name: 'EDO', address: 'NYSC Secretariat, 2 Red Cross Road off Ikpokpan Road, off Sapele Road, GRA Benin City', phone: '08034201334', email: 'edo@nysc.gov.ng' },
  ekiti: { id: '', state_name: 'EKITI', address: "NYSC Secretariat: Kilometer 2, Iyin Road P.M.B 5302, Ado Ekiti", phone: '08034041910', email: 'ekiti@nysc.gov.ng' },
  enugu: { id: '', state_name: 'ENUGU', address: "NYSC Secretariat 2 Abakaliki Road G.R.A P.M.B 1293, Enugu", phone: '08034977580', email: 'enugu@nysc.gov.ng' },
  fct: { id: '', state_name: 'FCT (ABUJA)', address: "NYSC Secretariat : No. 6 Lasale Street Off Shehu Shagari way Maitama, beside CBN Training centre, Abuja", phone: '08029656262', email: 'fct@nysc.gov.ng' },
  gombe: { id: '', state_name: 'GOMBE', address: 'NYSC Secretariat, along F.M.C/ Ashaka Road, P.M.B. 036, Gombe,Gombe State.', phone: '08035401202', email: 'gombe@nysc.gov.ng' },
  imo: { id: '', state_name: 'IMO', address: 'NYSC Secretariat:Mbano Street Aladinma Housing Estate, Owerri', phone: '08036541365', email: 'imo@nysc.gov.ng' },
  jigawa: { id: '', state_name: 'JIGAWA', address: 'NYSC Secretariat Kigawa Road, P.M.B 7049, Dutse.', phone: '08034818138', email: 'jigawa@nysc.gov.ng' },
  kaduna: { id: '', state_name: 'KADUNA', address: 'NYSC Secretariat: Unguwa Rimi P.M.B 2201, Kaduna', phone: '08034059437', email: 'kaduna@nysc.gov.ng' },
  kano: { id: '', state_name: 'KANO', address: 'NYSC Secretariat Gwarzo Road P.M.B 3137, Kano', phone: '08023580096', email: 'kano@nysc.gov.ng' },
  katsina: { id: '', state_name: 'KATSINA', address: 'NYSC Secretariat Federal Secretariat Complex Katsina. P.M.B 2034, Katsina', phone: '08036123353', email: 'katsina@nysc.gov.ng' },
  kebbi: { id: '', state_name: 'KEBBI', address: 'NYSC Secretariat 4 Patrick Aziza Road P.M.B 1043, Birnin Kebbi', phone: '08030639958', email: 'kebbi@nysc.gov.ng' },
  kogi: { id: '', state_name: 'KOGI', address: 'NYSC State Secretariat Lokoja- Okene Road Lokongoma Phase 1, P.M.B. 1046, Kogi State.', phone: '08033724233', email: 'kogi@nysc.gov.ng' },
  kwara: { id: '', state_name: 'KWARA', address: 'NYSC Secretariat: Ahmadu Bello Way P.M.B 1512, Ilorin', phone: '08033357545', email: 'kwara@nysc.gov.ng' },
  lagos: { id: '', state_name: 'LAGOS', address: 'NYSC Secretariat: Old Census Office Babs Animashun Street , Surulere Lagos', phone: '08035955422', email: 'lagos@nysc.gov.ng' },
  nassarawa: { id: '', state_name: 'NASSARAWA', address: 'NYSC Secretariat: 26 Makurdi Road P.M.B 31, Lafia', phone: '09060952091', email: 'nasarawa@nysc.gov.ng' },
  niger: { id: '', state_name: 'NIGER', address: 'NYSC Secretariat Bosso Road P.M.B 83, Minna', phone: '08036242113', email: 'niger@nysc.gov.ng' },
  ogun: { id: '', state_name: 'OGUN', address: 'NYSC Secretariat Federal Government Secretariat P.M.B 2093, Abeokuta', phone: '08162761900', email: 'ogun@nysc.gov.ng' },
  ondo: { id: '', state_name: 'ONDO', address: 'NYSC Secretariat Fed. Govt. Secretariat Complex P.M.B 718, Akure', phone: '07031945014', email: 'ondo@nysc.gov.ng' },
  osun: { id: '', state_name: 'OSUN', address: 'NYSC Secretariat New Ikirun road P.M.B 4370, Oshogbo', phone: '07032982884', email: 'osun@nysc.gov.ng' },
  oyo: { id: '', state_name: 'OYO', address: ' NYSC Secretariat :Former 2, Mech. Drive P.M.B 5500, Ibadan.', phone: '08034800685', email: 'oyo@nysc.gov.ng' },
  plateau: { id: '', state_name: 'PLATEAU', address: 'NYSC Secretariat: Old Miango Road, Kufan Opp.Chindi Hotel, P.M.B 2258, Jos.', phone: '08034537874', email: 'plateau@nysc.gov.ng' },
  rivers: { id: '', state_name: 'RIVERS', address: 'NYSC Secretariat :40 Ikwerre Road P.M.B 5210, Port Harcourt', phone: '08132065660', email: 'rivers@nysc.gov.ng' },
  sokoto: { id: '', state_name: 'SOKOTO', address: 'NYSC Secretariat Birnin Kebbi Road , Sokoto', phone: '07038912689', email: 'sokoto@nysc.gov.ng' },
  taraba: { id: '', state_name: 'TARABA', address: 'State Secretariat: NYSC Secretariat 118 Hammaruwa way, PMB 1058 Jalingo, Taraba State.', phone: '08033446524', email: 'taraba@nysc.gov.ng' },
  yobe: { id: '', state_name: 'YOBE', address: 'NYSC Secretariat State secretariat Phase 1 , P.M.B 1026, Damaturu', phone: '07039469446', email: 'yobe@nysc.gov.ng' },
  zamfara: { id: '', state_name: 'ZAMFARA', address: ' NYSC Secretariat Sokoto Road , Gada Biyu P.M.B 1026, Gusau ', phone: '07085856416', email: 'zamfara@nysc.gov.ng' },
}

export default STATE_SEC;