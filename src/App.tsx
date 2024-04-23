import AppProvider from "@providers/AppProvider";
import NotificationProvider from "@providers/NotificationProvider";
import AppRoutes from "@routes/AppRoutes";

function App() {
  return (
    <AppProvider>
      <NotificationProvider>
        <AppRoutes />
      </NotificationProvider>
    </AppProvider>
  );
}

export default App;
