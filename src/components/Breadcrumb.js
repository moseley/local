import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import categories from '../constants/categories';

const Breadcrumb = props => {
  let crumbs = [];

  if (props.match.params.primary) {
    categories
      .filter(c => c.id === props.match.params.primary)
      .forEach(({ id: pId, title: pTitle, secondary }) => {
        if (props.match.params.secondary) {
          secondary
            .filter(c => c.id === props.match.params.secondary)
            .forEach(({ id: sId, title: sTitle, tertiary }) => {
              if (props.match.params.tertiary) {
                tertiary
                  .filter(c => c.id === props.match.params.tertiary)
                  .forEach(({ id: tId, title: tTitle }) => {
                    crumbs.push(
                      <Link
                        component={RouterLink}
                        key={`/${pId}`}
                        to={`/${pId}`}
                      >
                        {pTitle}
                      </Link>
                    );
                    crumbs.push(
                      <Link
                        component={RouterLink}
                        key={`/${pId}/${sId}`}
                        to={`/${pId}/${sId}`}
                      >
                        {sTitle}
                      </Link>
                    );
                    crumbs.push(
                      <Typography key={tTitle} color='textPrimary'>
                        {tTitle}
                      </Typography>
                    );
                  });
              } else {
                crumbs.push(
                  <Link component={RouterLink} key={`/${pId}`} to={`/${pId}`}>
                    {pTitle}
                  </Link>
                );
                crumbs.push(
                  <Typography key={sTitle} color='textPrimary'>
                    {sTitle}
                  </Typography>
                );
              }
            });
        } else {
          crumbs.push(
            <Typography key={pTitle} color='textPrimary'>
              {pTitle}
            </Typography>
          );
        }
      });
  }

  return (
    <Breadcrumbs aria-label='breadcrumb'>
      {crumbs.map(item => item)}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
