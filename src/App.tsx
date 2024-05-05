import AppProvider from "@providers/AppProvider";
import NotificationProvider from "@providers/NotificationProvider";
import UserProvider from "@providers/UserProvider";
import AppRoutes from "@routes/AppRoutes";

function App() {
  return (
    <AppProvider>
      <NotificationProvider>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </NotificationProvider>
    </AppProvider>
  );
}

export default App;
