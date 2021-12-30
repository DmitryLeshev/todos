import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DefaultTemplate } from "shared/ui";
import type { Todos, Pagination } from '../model'


type Props = {
  todos: Todos,
  pagination: Pagination | null,
  isLoading: boolean
};
const TodosPage: React.FC<Props> = ({ todos, pagination, isLoading }) => {
  return (
    <DefaultTemplate helmet='home-page' scrollbar style={{
      backgroundImage: "url(https://source.unsplash.com/random)",
    }}>
      <Box sx={{
        width: '100%',
        flexGrow: 1,
        background: `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
        linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
        linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);`
      }}>
        <Typography padding={3} variant='h1' color='black'>
          TodosPage
        </Typography>

        <Typography padding={3} variant='h3' color='black'>
          Description
        </Typography>

        <div>
          <Box component='ul' sx={{ display: 'flex', flexDirection: 'column' }}>
            {todos.map((todo, index) => {
              return <Box component='li' key={index}>{todo.name}</Box>
            })}
          </Box>
        </div>

        <div>
          <Box component='ul' sx={{ display: 'flex' }}>
            {Array.from({ length: pagination?.totalPages ?? 0 }, (_, i) => ++i).map((count) => {
              return <Box component='li' key={count}>{count}</Box>
            })}
          </Box>
        </div>

      </Box>
    </DefaultTemplate>
  );
};

export default TodosPage;
