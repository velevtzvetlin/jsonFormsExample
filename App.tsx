/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { CustomJsonForm } from '@ameripharma/rnr-json-forms'

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const schemaObject = {
    type: "object",
    properties: {
      date: {
        type: "string",
        title: "date only"
      },
      lotStickerPhoto: {
        type: "string"
      },
      signatureTwo: {
        type: "string",
        title: "siglabel..."
      },
      phoneNumber: {
        type: "string",
        title: "phone number field",
        pattern: "^[0-9]{10}$"
      },
      chronic: {
        type: "string",
        title: "Chronic label",
        enum: [
          "op1",
          "op2",
          "op3",
          "op4",
          "op5"
        ]
      },
      firstName: {
        type: "string",
        title: "patient first name",
        minLength: 3
      },
    }
  };

  const item = {
    type: "Category",
    elements: [
      {
        type: "VerticalLayout",
        elements: [
          {
            type: "Control",
            scope: "#/properties/date",
            options: {
              hideRequiredAsterisk: false,
              format: "date"
            },
            label: "just a date"
          },
          {
            type: "Control",
            scope: "#/properties/signatureTwo",
            options: {
              format: "sigpad"
            },
            label: "Patient Signature"
          },
          {
            type: "Control",
            scope: "#/properties/phoneNumber",
            label: "Enter Phone number",
            options: {
              hideRequiredAsterisk: false,
              format: "phoneNumber"
            }
          },
          {
            type: "Control",
            scope: "#/properties/chronic",
            options: {
              format: "radio"
            },
            label: "radio label from ui schema"
          },
          {
            type: "Control",
            scope: "#/properties/firstName",
            label: "first name"
          },
          {
            type: "Control",
            scope: "#/properties/lotStickerPhoto",
            options: {
              format: "photo"
            },
            label: "Lot sticker photo"
          }
        ]
      }
    ]
  }

  const uiSchema = {
    type: "Categorization",
    elements: [item]
  };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          <CustomJsonForm
          schema={schemaObject}
          uischema={uiSchema}
          validationMode='NoValidation'
          data={{}}
          onChange={(data) => {
            // setData(data);
          }}
        />
        <View>
          <Text>hi</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
