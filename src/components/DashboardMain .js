import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FeedbackIcon from '@mui/icons-material/Feedback';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import wardImage from '../images/ward.jpeg';
import codyImage from '../images/cody.jpeg';
import johnImage from '../images/john.jpeg';
import guyImage from '../images/guy.jpeg';


const data = [
  { name: '1', uv: 4000 },
  { name: '2', uv: 3000 },
  { name: '3', uv: 2000 },
  { name: '4', uv: 2780 },
  { name: '5', uv: 1890 },
  { name: '6', uv: 2390 },
  { name: '7', uv: 3490 },
  { name: '8', uv: 2780 },
  { name: '9', uv: 2000 },
  { name: '10', uv: 3490 },
  { name: '11', uv: 3000 },
  { name: '12', uv: 2780 },
  { name: '13', uv: 2000 },
  { name: '14', uv: 2390 },
  { name: '15', uv: 3490 },
  { name: '16', uv: 2780 },
  { name: '17', uv: 3000 },
  { name: '18', uv: 2000 },
  { name: '19', uv: 3490 },
  { name: '20', uv: 3000 },
  { name: '21', uv: 2780 },
  { name: '22', uv: 2000 },
  { name: '23', uv: 2390 },
  { name: '24', uv: 3490 },
  { name: '25', uv: 2780 },
  { name: '26', uv: 3000 },
  { name: '27', uv: 2000 },
  { name: '28', uv: 2390 },
  { name: '29', uv: 3490 },
  { name: '30', uv: 2780 },
];



const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #1d1d1d;
  padding: 20px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 20px;
  width: 100%; /* Ensure container takes full width */
  box-sizing: border-box; /* Include padding and border in the width */
`;
const SummaryCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Adjust card size */
  gap: 10px;
`;

const SummaryCard = styled.div`
  background-color: #333;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

 const IconWrapper = styled.div`
   margin-bottom: 10px;
  svg {
    font-size: 2.5rem;
  }
 `;


const FeedbackContainer = styled.div`
  background-color: #333;
  border-radius: 10px;
  padding: 20px;
  flex: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const FeedbackItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeedbackText = styled.div`
  margin-left: 10px;
`;

const StarWrapper = styled.div`
  display: flex;
  color: #ffd700;
`;


const RightSideCard = styled.div`
  background-color: #282828;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;


const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;


const CircleIcon = styled.div`
  background-color: ${props => props.color || 'grey'};
  border-radius: 50%;
  padding: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: white;
    font-size: 1.5rem;
  }
`;


const ChartGoalsContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const ChartCard = styled.div`
  background-color: #282828;
  padding: 20px;
  border-radius: 10px;
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;


const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Dropdown = styled.select`
  background-color: #444;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
`;


const OrdersFeedbackContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const RecentOrdersCard = styled.div`
  background-color: #282828;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const FeedbackTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color:#ccc;

 
`;

const TableCell = styled.td`
  padding: 10px;
  // border: 1px solid #ccc;
`;

const CustomerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const Status = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  background-color: ${props => {
    switch (props.status) {
      case 'Delivered':
        return 'green';
      case 'Cancelled':
        return 'red';
      case 'Pending':
        return 'orange';
      default:
        return 'gray';
    }
  }};
`;

const FeedbackRow = styled.tr`
  &:hover {
    background-color: #2c2c2e;
  }
`;

const orders = [
  { id: 1, customer: 'Wade Warren', image:wardImage, orderNo: '15478356', amount: '$150.00', status: 'Delivered' },
  { id: 2, customer: 'john cooper',  image:johnImage, orderNo: '15478356', amount: '$385.02', status: 'Delivered' },
  { id: 3, customer: 'Guy  Hawkins', image:guyImage, orderNo: '15478356', amount: '$45.88', status: 'Cancelled' },
  { id: 4, customer: 'Cody fisher', image:codyImage, orderNo: '15478356', amount: '$545.00', status: 'Cancelled' },
];

const DashboardMain = () => {
  return (
    <DashboardContainer>
    
      <SummaryCardContainer>
        <SummaryCard>
          <IconWrapper>
            <ShoppingCartIcon style={{ color: 'blue' }} />
          </IconWrapper>
          <h3>Total Orders</h3>
          <p>75</p>
        </SummaryCard>
        <SummaryCard>
          <IconWrapper>
            <LocalShippingIcon style={{ color: 'green' }} />
          </IconWrapper>
          <h3>Total Delivered</h3>
          <p>70</p>
        </SummaryCard>
        <SummaryCard>
          <IconWrapper>
            <CancelIcon style={{ color: 'red' }} />
          </IconWrapper>
          <h3>Total Cancelled</h3>
          <p>5</p>
        </SummaryCard>
        <SummaryCard>
          <IconWrapper>
            <AttachMoneyIcon style={{ color: 'gold' }} />
          </IconWrapper>
          <h3>Total Revenue</h3>
          <p>$12k</p>
        </SummaryCard>
        <SummaryCard>
          <IconWrapper>
            <TrendingUpIcon style={{ color: 'purple' }} />
          </IconWrapper>
          <h3>Net Profit</h3>
          <p>$6759.25</p>
        </SummaryCard>
      </SummaryCardContainer>

    
      <ChartGoalsContainer>
        <ChartCard>
          <ChartHeader>
            <h3>Activity</h3>
            <Dropdown>
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
              <option value="daily">Daily</option>
            </Dropdown>
          </ChartHeader>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Bar dataKey="uv" fill="#8884d8" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <RightSideCard>
          <h3>Goals</h3>
          <ListItem>
            <CircleIcon color="#FF6B6B">
              <EmojiEventsIcon />
            </CircleIcon>
            <span>Achieve 100 Sales</span>
          </ListItem>
          <ListItem>
            <CircleIcon color="#4ECDC4">
              <RestaurantMenuIcon />
            </CircleIcon>
            <span>Introduce New Menu</span>
          </ListItem>
          <ListItem>
            <CircleIcon color="#5567FF">
              <MenuBookIcon />
            </CircleIcon>
            <span>Update Recipe Book</span>
          </ListItem>
        </RightSideCard>
      </ChartGoalsContainer>

     
      <OrdersFeedbackContainer>
        <RecentOrdersCard>
          <h3>Recent Orders</h3>
         
         <FeedbackTable>
          <thead>
            <tr>
              <TableHeader>Customer</TableHeader>
              <TableHeader>Order No</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Status</TableHeader>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <FeedbackRow key={order.id}>
                <TableCell>
               <CustomerImage src={order.image} alt={order.customer} />
               {order.customer}
                </TableCell>
                <TableCell>{order.orderNo}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <Status status={order.status}>{order.status}</Status>
                </TableCell>
              </FeedbackRow>
            ))}
          </tbody>
        </FeedbackTable>
         
        </RecentOrdersCard>
        <FeedbackContainer>
          <h3>Customer's Feedback</h3>
          <FeedbackItem>
            <IconWrapper>
              <FeedbackIcon style={{ color: 'pink' }} />
            </IconWrapper>
            <FeedbackText>
              <h4>Jenny Wilson</h4>
              <StarWrapper>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </StarWrapper>
              <p>
                “The food was amazing, and the service was excellent! I loved the presentation.”
              </p>
            </FeedbackText>
          </FeedbackItem>
          <FeedbackItem>
            <IconWrapper>
              <FeedbackIcon style={{ color: 'pink' }} />
            </IconWrapper>
            <FeedbackText>
              <h4>Dianne Russell</h4>
              <StarWrapper>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </StarWrapper>
              <p>
                “The pasta was a little overcooked, but the ambiance made up for it.”
              </p>
            </FeedbackText>
          </FeedbackItem>
          <FeedbackItem>
            <IconWrapper>
              <FeedbackIcon style={{ color: 'pink' }} />
            </IconWrapper>
            <FeedbackText>
              <h4>Devon Lane</h4>
              <StarWrapper>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </StarWrapper>
              <p>
                “Amazing food with a great view! Will visit again for sure.”
              </p>
            </FeedbackText>
          </FeedbackItem>
        </FeedbackContainer>
      </OrdersFeedbackContainer>
    </DashboardContainer>
  );
};

export default DashboardMain;
