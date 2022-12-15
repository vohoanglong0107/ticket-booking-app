import { NextPageWithLayout } from "./_app";
import { gql } from "@apollo/client";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { InferGetServerSidePropsType } from "next";
import { initializeApolloClient } from "@/lib/apollo";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const queryUserByEmail = gql`
  query Query($email: String) {
    user(email: $email) {
      id
      firstName
      lastName
      email
      avatarURL
      role
      address
    }
  }
`;

const queryBookingByUser = gql`
  query Bookings($userId: String) {
    bookings(userId: $userId) {
      id
      timeSlot {
        id
        startTime
        endTime
      }
      number_of_participants
      game {
        name
      }
    }
  }
`;

const displayTime = (dateTime: string) => {
  const date = new Date(dateTime);
  return `${date.getHours()}:${date.getMinutes()}`;
};

export const getServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
      },
      props: {},
    };
  }
  const apolloClient = initializeApolloClient();
  const { data } = await apolloClient.query({
    query: queryUserByEmail,
    variables: { email: session.user.email },
  });
  const { user } = data;
  const { data: bookingData } = await apolloClient.query({
    query: queryBookingByUser,
    variables: { userId: user.id },
  });
  const { bookings } = bookingData;
  return {
    props: {
      bookings,
    },
  };
};

const Bookings: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ bookings }) => {
  return (
    <section className="gradient-form flex h-full justify-center bg-gray-200">
      <div className="container h-full py-12 px-6">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Game</TableCell>
                <TableCell align="right">Start Time</TableCell>
                <TableCell align="right">End Time</TableCell>
                <TableCell align="right">Number of slot</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow
                  key={booking.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {booking.id}
                  </TableCell>
                  <TableCell align="right">{booking.game.name}</TableCell>
                  <TableCell align="right">
                    {displayTime(booking.timeSlot.startTime)}
                  </TableCell>
                  <TableCell align="right">
                    {displayTime(booking.timeSlot.endTime)}
                  </TableCell>
                  <TableCell align="right">
                    {booking.number_of_participants}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default Bookings;
