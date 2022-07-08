import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        สงวนลิขสิทธิ์ SK ชาวเล สาขามหาชัย
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2];

const use = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

export default function Album() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        { <Toolbar>
            
            <a href='home'><img src={`/images/logo.png`} width="50" alt="" title=''/></a>
          <Typography variant="h8" color="inherit" noWrap>
          ขายส่งอาหารทะเล ทุกชนิด ทั้งของสดและแช่แข็ง จัดส่งทั่วประเทศ &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
           &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; ติดต่อเราโทร. 087-455-5558, 093-289-1455
          </Typography>
          &emsp;<a href="https://lin.ee/sc7u4Ov"> LINE ID : @335rxyyu </a>
          &emsp;<a href="https://web.facebook.com/Sk-%E0%B8%8A%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%A5-%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%8A%E0%B8%B1%E0%B8%A2-%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%AA%E0%B8%94-%E0%B9%81%E0%B8%8A%E0%B9%88%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87-%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8-103412609044655"><img src={`/images/iconfb.PNG`} width="20" alt="" title=''/></a>
          &emsp;<a href="https://lin.ee/sc7u4Ov"><img src={`/images/icon.PNG`} width="20" alt="" title=''/></a>
        </Toolbar> }
      </AppBar>

      

      <main>
      <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <a href='home'><Tab label="หน้าหลัก" /></a>
        <a href='about_us'><Tab label="เกี่ยวกับเรา" /></a>
        <Tab label="อาหารทะเลทุกชนิด" />
        <a href='contact'><Tab label="ติดต่อเรา" /></a>
      </Tabs>
    </Paper>
        
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              SK ชาวเล สาขามหาชัย
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              อาหารทะเลสด/แช่แข็ง ทุกชนิด สั่งซื้อสินค้าได้ตลอด 24 ชม. ส่งทุกจังหวัดทั่วไทย
            </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='/images/fb.png'
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      กุ้งก้ามกราม กุ้งขาว
                    </Typography>
                    <Typography>
                      รายละเอียด กุ้งก้ามกราม ไซส์ 18-20 ตัวโล, กุ้งขาว (ลูกค้าสามารถระบุไซส์ที่ต้องการต่อโลได้)
                    </Typography>
                  </CardContent>
                  <CardActions>
                  
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        

      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          ติดต่อเรา
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        สถานที่ตั้ง : ตลาดทะเลไทย ม.1 1/2 ถ.พระราม 2 ต.ท่าจีน อ.เมือง จ.สมุทรสาคร 74000
        <br />สั่งอาหารทะเล : 087-455-5558, 093-289-1455
        <br />ไลน์ไอดี :<a href="https://lin.ee/sc7u4Ov"> @335rxyyu </a>
        <br />เพจ :<a href="https://web.facebook.com/Sk-%E0%B8%8A%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%A5-%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%8A%E0%B8%B1%E0%B8%A2-%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%AA%E0%B8%94-%E0%B9%81%E0%B8%8A%E0%B9%88%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87-%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8-103412609044655"> /skchaolaymahachai </a>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}