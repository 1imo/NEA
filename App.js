import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import { useEffect, useState } from 'react';

import useFonts from './hooks/useFonts';
import AppLoading from 'expo-app-loading';
import GetCertainValue from './pages/GetCertainValue';



export default function App() {
  const [IsReady, SetIsReady] = useState(false);
  const [pages, setPages] = useState()

  const [location, setLocationTo] = useState(0)
  const [memory, setMemory] = useState(0)

  const pageTree = [
    {
      position: 1,
      data: {
        result: null,
        connectsTo: [[], [3]]
      },
      loc: <Home navigate={setLocationTo} setData={setMemory}  data={this.data} memory={memory} />,
    },
    {
      position: 1,
      data: {
        result: null,
        connectsTo: [3]
      },     
      loc: <GetCertainValue navigate={setLocationTo} setData={setMemory} memory={memory} />,
    }
  ]

  class page {
    constructor(index) {
      this.index = index
      this.loc  = pageTree[index].loc
      this.connectsTo = [pageTree[index].data.connectsTo]
    }

    calcPathways() {
      return this.loc
    }
  }

  useEffect(() => {
    for(let i  = 0; i < pageTree.length; i++) {
      if(pageTree[i].position == location) {

      }
    }
  }, [location])

  




  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    pageTree[0].loc

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
