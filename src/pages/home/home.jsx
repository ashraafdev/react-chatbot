export default function Home() {
  return (
    <>
      <Route
        path="/conversation/:conversationId?"
        exact
        element={<ChatBot />}
      />
    </>
  );
}
