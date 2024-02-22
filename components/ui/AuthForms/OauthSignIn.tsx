import { signInWithOAuth } from '@/utils/auth-helpers/server';
import { type Provider } from '@supabase/supabase-js';
import { Github } from 'lucide-react';
import SubmitButton from './SubmitButton';

type OAuthProviders = {
  name: Provider;
  displayName: string;
  icon: JSX.Element;
};

export default function OauthSignIn() {
  const oAuthProviders: OAuthProviders[] = [
    {
      name: 'github',
      displayName: 'GitHub',
      icon: <Github className="h-5 w-5" />
    }
    /* Add desired OAuth providers here */
  ];

  return (
    <div className="mt-8">
      {oAuthProviders.map((provider) => (
        <form key={provider.name} className="pb-2" action={signInWithOAuth}>
          <input type="hidden" name="provider" value={provider.name} />
          <SubmitButton variant="slim" type="submit" className="w-full">
            <span className="mr-2">{provider.icon}</span>
            <span>{provider.displayName}</span>
          </SubmitButton>
        </form>
      ))}
    </div>
  );
}
