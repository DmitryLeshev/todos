import { Button, Dialog, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  isOpened: boolean;
};

export const SignIn = ({ isOpened }: Props) => {
  const navigate = useNavigate();
  return (
    <Dialog onClose={() => navigate(-1)} open={isOpened}>
      <form noValidate autoComplete="off">
        <h2>Sign In</h2>
        <TextField label="Username" />
        <TextField label="Password" />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={() => navigate(-1)}
        >
          Send
        </Button>
      </form>
    </Dialog>
  );
};

export const SignUp = ({ isOpened }: Props) => {
  const navigate = useNavigate();

  return (
    <Dialog onClose={() => navigate(-1)} open={Boolean(isOpened)}>
      <form noValidate autoComplete="off">
        <h2>Sign Up</h2>
        <TextField label="First Name" />
        <TextField label="Last Name" />
        <TextField label="Username" />
        <TextField label="Password" />
        <TextField label="Repeat Password" />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={() => navigate(-1)}
        >
          Send
        </Button>
      </form>
    </Dialog>
  );
};

// const NotificationItem = ({ notification }: any) => {
//   const link = usePrepareLink({
//     query: {
//       [GET_PARAMS.notificationId]: notification.id,
//     },
//     keepOldQuery: true,
//   });

//   return (
//     <li>
//       <Link to={link}> List Item {notification.id}</Link>
//     </li>
//   );
// };

// export const Notifications = ({ isOpened }: Props) => {
//     const navigate = useNavigate();

//   const notificationId = useGetParameter(GET_PARAMS.notificationId);
//   const [id, setId] = React.useState(notificationId);

//   const closePopup = useClosePopup();

//   React.useEffect(() => {
//     if (notificationId) {
//       setId(notificationId);
//     }
//   }, [notificationId]);

//   return (
//     <Dialog onClose={closePopup} open={Boolean(isOpened)}>
//       <div >
//         <p>Notifications</p>
//         <ul>
//           {[{ id: 1 }].map((notification) => {
//             return (
//               <NotificationItem
//                 key={notification.id}
//                 notification={notification}
//               />
//             );
//           })}
//         </ul>
//         {id && (
//           <div>
//             <p>Details {id}</p>
//           </div>
//         )}
//       </div>
//     </Dialog>
//   );
// };
