import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

export default function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return <Routes />;
}
