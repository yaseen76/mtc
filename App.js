import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Linking,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Start Home Section
function HomeScreen(props) {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Welcome to Refugee Navigator!</Text>
          <Text style={styles.description}>Embark on your American journey with the right tools and resources, all tailored for you.</Text>
          <Text style={styles.specialMessage}>By Immigrants, For Immigrants.</Text>
          <View style={styles.buttonContainer}>
              <Button title="Contact Us" onPress={() => props.navigation.navigate('Contact')}/>
              <Button title="Links" onPress={() => props.navigation.navigate('Links')} />
          </View>
      </View>
  );
}
// End Home Section

// Start Links Section
function LinksScreen() {
  return (
    <View style={styles.container}>
      <Text>Links Content</Text>
    </View>
  );
}
// End Links Section


// Start Purpose Section
function PurposeScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Our Purpose</Text>
          <Text style={styles.description}>To empower every immigrant and refugee with the knowledge, resources, and tools necessary to transition and thrive in the United States of America.</Text>
          <Text style={styles.subText}>The journey to a new country, comes with its unique challenges - from understanding the new culture to navigating the job market or financial difficultes. We realized the need for a comprehensive guide, tailored for those looking to make the US their new home.</Text>
          <Text style={styles.subText}>For every dreamer, every hopeful, every seeking soul who's set foot on this land looking for a better tomorrow. Whether you've just arrived or have been here for years, there's something here for everyone, including us!</Text>
          <Text style={styles.specialMessage}>Transitioning to a new life in a new country is often a challenging task. As immigrants ourselves, we've faced the challenges, felt the confusion, and navigated the complexities. We built this platform so you don't have to start from scratch. So you can save time, money, and focus on building your dream.</Text>
      </View>
  );
}
// End Purpose Section

// Start Contact Screen
function ContactScreen() {         
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Team Members!</Text>
      <Text style={styles.description}>Yaseen El-Helaly - yelhelaly@berkeley.edu</Text>
      <Text style={styles.description}>Aya Lubbad - alubbad@berkeley.edu</Text>
      <Text style={styles.description}>Mekaeel Ahmad - mekaeel@berkeley.edu</Text>
      <Text style={styles.description}>Abdallah El Tayeb - abd.m.eltayeb@berkeley.edu</Text>
      <Text style={styles.description}>Latifah Al Abbad - Lalabbad@berkeley.edu</Text>
      <Text style={styles.description}>Mahum Khan - mahumkhan@berkeley.edu</Text>
      <Text style={styles.description}>Zeyad Khokhar - mahumkhan@berkeley.edu</Text>
      <Text style={styles.description}>Mahum Khan - mahumkhan@berkeley.edu</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.description}>Muslim Technology Collaborative - </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/mtcberkeley')}>
          <Text style={{ ...styles.description, textDecorationLine: 'underline', color: 'blue' }}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// End Contact Screen


// Start Language Section
function LanguageLearningScreen({ navigation }) { 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Language Learning Resources and Information</Text>
            <Button 
                title="Beginner"
                onPress={() => navigation.navigate('Beginner')}
            />
            <Button 
                title="Intermediate"
                onPress={() => navigation.navigate('Intermediate')}
            />
            <Button 
                title="Advanced"
                onPress={() => navigation.navigate('Advanced')}
            />
            <Button 
                title="Resources"
                onPress={() => navigation.navigate('Resources')}
            />
        </View>
    );
}

function BeginnerScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Beginner</Text>
            <Text>Alphabets & Numbers</Text>
            <Text>Common Phrases for Everyday Use</Text>
            <Text>Listening Practices</Text>
        </View>
    );
}

function IntermediateScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Intermediate</Text>
            <Text>Grammar Rules & Usage</Text>
            <Text>Reading Practices with Intermediate Level Text (Percy Jackson)</Text>
            <Text>Introducing Idioms, Verbs etc</Text>
        </View>
    );
}

function AdvancedScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Advanced</Text>
            <Text>Writing Practices: Composing Essays, Formal Letters</Text>
            <Text>Debates, Presentations</Text>
            <Text>Cultural Contexts</Text>
        </View>
    );
}

function ResourcesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resources</Text>
            <Text>DuoLingo</Text>
            <Text>Rosetta Stone</Text>
            <Text>Babbel</Text>
            <Text>BBC Learning English</Text>
            <Text>Local Language Schools (Search with Google Maps API)</Text>
        </View>
    );
}

function LanguageLearningStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="LanguageLearning">
            <Stack.Screen name="LanguageLearning" component={LanguageLearningScreen} options={{ title: 'Language Learning' }} />
            <Stack.Screen name="Beginner" component={BeginnerScreen} options={{ title: 'Beginner' }} />
            <Stack.Screen name="Intermediate" component={IntermediateScreen} options={{ title: 'Intermediate' }} />
            <Stack.Screen name="Advanced" component={AdvancedScreen} options={{ title: 'Advanced' }} />
            <Stack.Screen name="Resources" component={ResourcesScreen} options={{ title: 'Resources' }} />
        </Stack.Navigator>
    );
}
// End Language Section

// Start Legal Rights Section
function LegalRightsStackNavigator() {
  return (
      <Stack.Navigator initialRouteName="LegalRightsMain">
          <Stack.Screen name="LegalRightsMain" component={LegalRightsScreen} options={{ title: 'Legal Rights & Information' }} />
          <Stack.Screen name="ImmigrantRights" component={ImmigrantRightsScreen} options={{ title: 'Rights as an Immigrant or Refugee' }} />
          <Stack.Screen name="VisasGreenCards" component={VisasGreenCardsScreen} options={{ title: 'Understanding Visas and Green Cards' }} />
          <Stack.Screen name="Naturalization" component={NaturalizationScreen} options={{ title: 'Naturalization' }} />
      </Stack.Navigator>
  );
}


function LegalRightsScreen({ navigation }) {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Legal Rights & Information</Text>
          <Button 
              title="Rights as an Immigrant or Refugee"
              onPress={() => navigation.navigate('ImmigrantRights')}
          />
          <Button 
              title="Understanding Visas and Green Cards"
              onPress={() => navigation.navigate('VisasGreenCards')}
          />
          <Button 
              title="Naturalization"
              onPress={() => navigation.navigate('Naturalization')}
          />
          {/* Direct links to USCIS, American Immigration Council here */}
      </View>
  );
}


function ImmigrantRightsScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Rights as an Immigrant or Refugee</Text>
          <Text style={styles.listItem}>- Right to an interpreter In court</Text>
          <Text style={styles.listItem}>- Protection from discrimination based on national origin</Text>
          <Text style={styles.listItem}>- Right to public education for children</Text>
          <Text style={styles.link}>[Link to relevant sections from the Constitution]</Text>
      </View>
  );
}

function VisasGreenCardsScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Understanding Visas and Green Cards</Text>
          <Text style={styles.listItem}>- Types of Visas and their requirements</Text>
          <Text style={styles.listItem}>- The process of obtaining a green card</Text>
          <Text style={styles.listItem}>- Rights and restrictions associated with different visa statuses</Text>
      </View>
  );
}

function NaturalizationScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Naturalization</Text>
          <Text style={styles.listItem}>- Eligibility Criteria</Text>
          <Text style={styles.listItem}>- Application Process</Text>
          <Text style={styles.listItem}>- Citizenship Test Preparation</Text>
      </View>
  );
}
// End Legal Rights Section

// Start Job Assistance Screen
function JobAssistanceScreen() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Job Assistance Content</Text>
      </View>
  );
}
// End Job Assistance

// Start American Cultures Section
function AmericanCulture() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>American Culture Content</Text>
      </View>
  );
}

// End American Cultures Section


// Start Emergency/Healthcare Section
function EmergencyContactsScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Emergency Contacts & Healthcare Information</Text>
          
          <Text style={styles.subTitle}>Emergency Numbers:</Text>
          <Text style={styles.listItem}>911 - For all emergencies (police, fire, medical).</Text>
          
          <Text style={styles.subTitle}>Helplines:</Text>
          <Text style={styles.listItem}>National Suicide Prevention Lifeline: 1-800-273-TALK (8255)</Text>
          <Text style={styles.listItem}>National Domestic Violence Hotline: 1-800-799-SAFE (7233)</Text>
          <Text style={styles.listItem}>SAMHSA Helpline: 1-800-662-HELP (4357)</Text>
          
          <Text style={styles.subTitle}>Healthcare Info:</Text>
          <Text style={styles.listItem}>Information on public healthcare services available.</Text>
          <Text style={styles.listItem}>List of nearest hospitals and clinics.</Text>

          <Text style={styles.subTitle}>Medicaid Information:</Text>
          <Text style={styles.listItem}>A brief about what Medicaid is.</Text>
          <Text style={styles.listItem}>Eligibility criteria and benefits.</Text>
          
          <Text style={styles.subTitle}>Links:</Text>
          <Text style={styles.listItem}>Direct links to the official U.S. government sites to apply for medical aid or Medicaid.</Text>
          <Text style={styles.listItem}>Information on Affordable Care Act (ACA) and how to apply for insurance under it.</Text>
      </View>
  );
}

// End Emergency/Healthcare Section


// Start Financial Section
function FinancialInfoStackNavigator() {
  return (
      <Stack.Navigator initialRouteName="FinancialInfoMain">
          <Stack.Screen name="FinancialInfoMain" component={FinancialInfoScreen} options={{ title: 'Financial Literacy' }} />
          <Stack.Screen name="Currency" component={CurrencyScreen} options={{ title: 'Understanding US Currency' }} />
          <Stack.Screen name="BankAccount" component={BankAccountScreen} options={{ title: 'Opening and Managing a Bank Account' }} />
          <Stack.Screen name="CreditLoans" component={CreditLoansScreen} options={{ title: 'Credit and Loans' }} />
          <Stack.Screen name="Taxes" component={TaxesScreen} options={{ title: 'Taxes' }} />
          <Stack.Screen name="Resources" component={FinancialResourcesScreen} options={{ title: 'Resources' }} />
      </Stack.Navigator>
  );
}

function FinancialInfoScreen({ navigation }) {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Financial Literacy</Text>
          <Button title="Understanding US Currency" onPress={() => navigation.navigate('Currency')} />
          <Button title="Opening and Managing a Bank Account" onPress={() => navigation.navigate('BankAccount')} />
          <Button title="Credit and Loans" onPress={() => navigation.navigate('CreditLoans')} />
          <Button title="Taxes" onPress={() => navigation.navigate('Taxes')} />
          <Button title="Resources" onPress={() => navigation.navigate('Resources')} />
      </View>
  );
}

function CurrencyScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Understanding U.S. Currency</Text>
            <Text style={styles.listItem}>- Denominations and their usage.</Text>
            <Text style={styles.listItem}>- Tips on recognizing and avoiding counterfeit money.</Text>
        </View>
    );
}
function BankAccountScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Opening and Managing a Bank Account</Text>
          <Text style={styles.listItem}>- Different types of accounts (checking, savings).</Text>
          <Text style={styles.listItem}>- Understanding interest rates, fees, and charges.</Text>
      </View>
  );
}

function CreditLoansScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Credit and Loans</Text>
          <Text style={styles.listItem}>- Building credit history.</Text>
          <Text style={styles.listItem}>- Types of loans (personal, mortgage, auto) and their requirements.</Text>
          <Text style={styles.listItem}>- Understanding interest rates, terms, and conditions.</Text>
      </View>
  );
}

function TaxesScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Taxes</Text>
          <Text style={styles.listItem}>- Introduction to the U.S. tax system.</Text>
          <Text style={styles.listItem}>- Importance of paying taxes and potential consequences of evasion.</Text>
          <Text style={styles.listItem}>- How to file taxes, including resources for assistance.</Text>
      </View>
  );
}

function FinancialResourcesScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Resources</Text>
          <Text style={styles.listItem}>- Websites: MyMoney.gov, Consumer Financial Protection Bureau.</Text>
          <Text style={styles.listItem}>- Financial literacy workshops at local community centers or libraries.</Text>
      </View>
  );
}

// End Financial Section


// Start Education Section
function EducationStackNavigator() {
  return (
      <Stack.Navigator initialRouteName="EducationMain">
          <Stack.Screen name="EducationMain" component={EducationScreen} options={{ title: 'Education' }} />
          <Stack.Screen name="PublicSchoolSystem" component={PublicSchoolSystemScreen} options={{ title: 'Public School System' }} />
          <Stack.Screen name="HigherEducation" component={HigherEducationScreen} options={{ title: 'Higher Education' }} />
          <Stack.Screen name="Scholarships" component={ScholarshipsScreen} options={{ title: 'Scholarships and Grants' }} />
          <Stack.Screen name="ESLPrograms" component={ESLProgramsScreen} options={{ title: 'ESL Programs' }} />
          <Stack.Screen name="Training" component={TrainingScreen} options={{ title: 'Vocational Training' }} />
      </Stack.Navigator>
  );
}

function EducationScreen({ navigation }) {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Education Resources and Information</Text>
          <Button 
              title="Public School System in the US"
              onPress={() => navigation.navigate('PublicSchoolSystem')}
          />
          <Button 
              title="Higher Education & Universities"
              onPress={() => navigation.navigate('HigherEducation')}
          />
          <Button 
              title="Scholarships & Financial Aid"
              onPress={() => navigation.navigate('Scholarships')}
          />
          <Button 
              title="ESL Programs"
              onPress={() => navigation.navigate('ESLPrograms')}
          />
          <Button 
              title="Vocational Training & Certification"
              onPress={() => navigation.navigate('VocationalTraining')}
          />
      </View>
  );
}

function PublicSchoolSystemScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Public School System in the US</Text>
          <Text style={styles.description}>Description and details about the public school system...</Text>
      </View>
  );
}

function HigherEducationScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Higher Education & Universities</Text>
          <Text style={styles.description}>Details about universities, application processes, and more...</Text>
      </View>
  );
}

function ScholarshipsScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Scholarships & Financial Aid</Text>
          <Text style={styles.description}>Information about scholarships, grants, and other financial aids...</Text>
      </View>
  );
}

function ESLProgramsScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>ESL Programs</Text>
          <Text style={styles.description}>Details about English as a Second Language (ESL) programs...</Text>
      </View>
  );
}

function TrainingScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Vocational Training & Certification</Text>
          <Text style={styles.description}>Information about vocational courses, certifications, and training programs...</Text>
      </View>
  );
}
// End Education Section

// Dark Mode?
function DarkModeToggle() {
  const { isDarkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <Button 
      title={`Turn ${isDarkMode ? 'Off' : 'On'} Dark Mode`} 
      onPress={() => setDarkMode(!isDarkMode)}
    />
  );
}
// End Dark Mode?


// Exporting to the Main App Screen
export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} 
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <AntDesign name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="Language Learning" component={LanguageLearningStackNavigator}
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome5 name="language" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="Legal Rights & Information" component={LegalRightsStackNavigator}
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome5 name="balance-scale" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="Financial Information" component={FinancialInfoStackNavigator}
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome5 name="credit-card" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="Education" component={EducationStackNavigator} 
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome5 name="school" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="Emergency Contacts" component={EmergencyContactsScreen} 
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <AntDesign name="phone" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="Resources Screen" component={ResourcesScreen} 
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome5 name="map-marked-alt" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="Job Assistance" component={JobAssistanceScreen} 
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome5 name="wrench" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="American Cultures" component={AmericanCulture} 
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome5 name="flag-usa" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="Links" component={LinksScreen} 
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <AntDesign name="link" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="Purpose" component={PurposeScreen} 
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome5 name="info-circle" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="Contact" component={ContactScreen} 
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <AntDesign name="customerservice" size={size} color={color} />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

// Just basic styles. Definetely change later cuz its so ugly right now
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20
  },
  description: {
      fontSize: 18,
      marginBottom: 15
  },
  subTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10
  },
  listItem: {
      fontSize: 16,
      marginLeft: 20
  },
  subText: {
      fontSize: 16,
      marginTop: 10
  },
  specialMessage: {
      fontSize: 16,
      fontStyle: 'italic',
      marginTop: 15
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20
      
  }
});
