import React from 'react';
import { TakeAwayMenuCard } from '../components/TakeAwayMenuCard';
import { useSelector } from 'react-redux';
import { menu } from '../dummyData.json';
import Search from './Search';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '2rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const TakeAwayMenu = () => {
  const classes = useStyles();

  const searchWord = useSelector((state) => state.filterReducer)
    .toLowerCase()
    .trim();
  const categoryMenu = Object.entries(menu);
  console.log('entries', categoryMenu);

  return (
    <>
      <Search />

      {searchWord !== '' ? (
        <>
          {categoryMenu.map((category, index) => {
            return (
              <div key={index}>
                <div className={classes.root}>
                  <Grid container spacing={3}>
                    {category[1]
                      .filter(
                        (item) =>
                          item.category.includes(searchWord) ||
                          item.name.toLowerCase().includes(searchWord)
                      )
                      .map((item) => (
                        <TakeAwayMenuCard key={item.id} item={item} />
                      ))}
                  </Grid>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          {categoryMenu.map((category, index) => {
            return (
              <div key={index}>
                <div className={category}>{category[0].toUpperCase()}</div>
                <div className={classes.root}>
                  <Grid container spacing={3}>
                    {category[1].map((item) => (
                      <TakeAwayMenuCard key={item.id} item={item} />
                    ))}
                  </Grid>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

// {
//   menuItems.map((category) => {
//     if (searchWord !== '') {
//       return category
//         .filter(
//           (item) =>
//             !item.category.search(searchWord) ||
//             !item.name.toLowerCase().search(searchWord)
//         )
//         .map((item) => <TakeAwayMenuCard key={item.id} item={item} />);
//     } else {
//       return category.map((item) => (
//         <TakeAwayMenuCard key={item.id} item={item} />
//       ));
//     }
//   });
// }

// --------------------
// {searchWord !== '' ? (
//   <>
//     {categoryMenu.map((category) => {
//       return category[1]
//         .filter(
//           (item) =>
//             !item.category.search(searchWord) ||
//             !item.name.toLowerCase().search(searchWord)
//         )
//         .map((item, index) => {
//           return (
//             <div key={index}>
//               <div className={classes.root} key={index}>
//                 <Grid container spacing={3}>
//                   <TakeAwayMenuCard key={item.id} item={item} />
//                 </Grid>
//               </div>
//             </div>
//           );
//         });
//     })}
//   </>
// ) : (
//   <>
//     {categoryMenu.map((category, index) => {
//       return (
//         <div key={index}>
//           <div className={category}>{category[0].toUpperCase()}</div>
//           <div className={classes.root}>
//             <Grid container spacing={3}>
//               {category[1].map((item) => (
//                 <TakeAwayMenuCard key={item.id} item={item} />
//               ))}
//             </Grid>
//           </div>
//         </div>
//       );
//     })}
//   </>
// )}
// </>
// );
// };
