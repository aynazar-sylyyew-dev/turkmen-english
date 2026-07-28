import { Colors, FontFamily } from "@/constants/theme";
import { useOnboardingState } from "@/lib/onboarding";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Redirect, Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  // Cold start anchors on "(tabs)", so a not-yet-onboarded user would land here
  // straight past the redirect in index.tsx. Gate the tabs too.
  const { onboarded } = useOnboardingState();
  if (onboarded === null) return null;
  if (!onboarded) return <Redirect href="/onboarding" />;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primaryAccentColor,
        tabBarInactiveTintColor: Colors.subduedTextColor,
        tabBarStyle: {
          backgroundColor: Colors.surfacePrimary,
          borderTopColor: Colors.divider,
          borderTopWidth: 1,
          height: 60,
          paddingTop: 6,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontFamily: FontFamily.semibold,
          fontSize: 11,
        },
      }}
    >
      <Tabs.Screen
        name="lessons"
        options={{
          title: "Esasy",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
