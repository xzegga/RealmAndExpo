import { Redirect, Slot, Stack, useRootNavigationState } from 'expo-router';

import RealmWrapper from '../../components/realm/RealmWrapper';
import { useAuth } from '../../context/AuthContext';

export default function Layout() {
  const rootNavigationState = useRootNavigationState();
  const { authState } = useAuth();

  if (!authState?.authenticated && rootNavigationState?.key) return <Redirect href="/login" />;

  return (
    <RealmWrapper>
      <Stack screenOptions={{
        headerShown: false,
      }} />
    </RealmWrapper>
  );
}
