import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Label from '@mui/icons-material/Label';
import FolderRounded from '@mui/icons-material/FolderRounded';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import Collapse from '@mui/material/Collapse';

import { animated, useSpring } from '@react-spring/web';


function DotIcon() {
    return (
      <Box
        sx={{
          width: 6,
          height: 6,
          borderRadius: '70%',
          bgcolor: 'warning.main',
          display: 'inline-block',
          verticalAlign: 'middle',
          zIndex: 1,
          mr: 1,
        }}
      />
    );
}
  
const StyledTreeItemLabel = styled(Typography)({
  color: 'inherit',
  fontFamily: 'General Sans',
  fontWeight: 'inherit',
  flexGrow: 1,
});

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color:
    theme.palette.mode === 'light'
      ? theme.palette.grey[800]
      : theme.palette.grey[400],
  position: 'relative',
  [`& .${treeItemClasses.content}`]: {
    flexDirection: 'row-reverse',
    borderRadius: theme.spacing(0.7),
    marginBottom: theme.spacing(0.5),
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(0.5),
    paddingRight: theme.spacing(1),
    fontWeight: 500,
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
    },
    [`& .${treeItemClasses.iconContainer}`]: {
      marginRight: theme.spacing(2),
    },
    [`&.Mui-expanded `]: {
      '&:not(.Mui-focused, .Mui-selected, .Mui-selected.Mui-focused) .labelIcon': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.primary.main
            : theme.palette.secondary.dark,
      },
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: '16px',
        top: '44px',
        height: 'calc(100% - 48px)',
        width: '1.5px',
        backgroundColor:
          theme.palette.mode === 'light'
            ? theme.palette.grey[300]
            : theme.palette.grey[700],
      },
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.mode === 'light' ? theme.palette.primary.main : 'white',
    },
    [`&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused`]: {
      backgroundColor:
        theme.palette.mode === 'light'
          ? theme.palette.primary.main
          : theme.palette.secondary.dark,
      color: 'white',
    },
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: theme.spacing(3.5),
    [`& .${treeItemClasses.content}`]: {
      fontWeight: 500,
    },
  },
}));

const AnimatedCollapse = animated(Collapse);

function TransitionComponent(props) {
    const style = useSpring({
      to: {
        opacity: props.in ? 1 : 0,
        transform: `translate3d(0,${props.in ? 0 : 20}px,0)`,
      },
    });
  
    return <AnimatedCollapse style={style} {...props} />;
  }
  
  const StyledTreeItem = React.forwardRef(function StyledTreeItem(props, ref) {
    const { labelIcon: LabelIcon, labelText, ...other } = props;
  
    return (
      <StyledTreeItemRoot
        slots={{
          groupTransition: TransitionComponent,
        }}
        label={
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component={LabelIcon}
              className="labelIcon"
              color="inherit"
              sx={{ mr: 1, fontSize: '1.2rem' }}
            />
            <StyledTreeItemLabel variant="body2">{labelText}</StyledTreeItemLabel>
          </Box>
        }
        {...other}
        ref={ref}
      />
    );
  });
  
  export default function NaviBar() {
    return (
      <SimpleTreeView
        aria-label="gmail"
        defaultExpandedItems={['3']}
        defaultSelectedItems="3"
        sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400, overflowY: 'auto', height: 'calc(100vh - 72px)', backgroundColor: '#dcdddd' }}
      >
        <StyledTreeItem nodeId="1" labelText="All Documents" labelIcon={FolderRounded}>
          <StyledTreeItem nodeId="6" labelText="Personal" labelIcon={DotIcon} />
          <StyledTreeItem nodeId="7" labelText="Images" labelIcon={DotIcon} />
        </StyledTreeItem>
        <StyledTreeItem nodeId="3" labelText="Bookmarked" labelIcon={Label}>
          <StyledTreeItem
            nodeId="12"
            labelText="Learning materials"
            labelIcon={DotIcon}
          />
          <StyledTreeItem nodeId="13" labelText="News" labelIcon={DotIcon} />
          <StyledTreeItem nodeId="14" labelText="Forums" labelIcon={DotIcon} />
          <StyledTreeItem
            nodeId="15"
            labelText="Travel documents"
            labelIcon={AirplanemodeActiveIcon}
          />
        </StyledTreeItem>
      </SimpleTreeView>
    );
  }