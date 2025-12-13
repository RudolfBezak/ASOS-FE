jest.unmock('expo');

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn(),
    auth: {
      signUp: jest.fn(),
      signInWithPassword: jest.fn(),
      signOut: jest.fn(),
      getUser: jest.fn(),
    },
  })),
}));

jest.mock('expo-router', () => ({
  Stack: 'Stack',
  Tabs: 'Tabs',
  useRouter: jest.fn(),
  useLocalSearchParams: jest.fn(),
  Link: 'Link',
}));

jest.mock('expo-font', () => ({
  loadAsync: jest.fn(),
  isLoaded: jest.fn(() => true),
}));

jest.mock('expo-asset', () => ({
  Asset: {
    loadAsync: jest.fn(),
  },
}));

global.console = {
  ...console,
  error: jest.fn(),
  warn: jest.fn(),
};
