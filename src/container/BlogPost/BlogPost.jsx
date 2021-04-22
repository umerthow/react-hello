import React, { Component, Fragment } from 'react';
import Post from '../../components/Post/PostComponent';
import './BlogPost.css';
import axios from 'axios'

class BlogPost extends Component {
  constructor(props) {
    super(props)

    this.state ={
      post: []
    }

  }

  getApi() {
    axios.get('https://3mh9tqpn5e.execute-api.ap-southeast-1.amazonaws.com/dev/somp/orders?limit=10&page=1&source=SSA&doc_status=APPLIED&order_status=SO', {
      headers: {
        Authorization: "eyJraWQiOiJ3Z0NIWVNjMjJGaHY2Yk1NdEJNR3VFT1dHdmxpcWtVSFpqb3JcL3VHNURqcz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1OWNiOTMzZS1hY2RjLTRjMWItYjE1NS05NGQ3MjJmYjZmMjUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiY3VzdG9tOnNhbGVzX29mZmljZXMiOiJEMzI0LEQ1MTEsRDMyNixEMTgxLEQzMjIsRFNBUzEsRDM2MixEMzE1LEQzMTItQkNJLEQzMjgsRDMxNCxEMTYxLEQxMjEsRDMyNyxEMzEyLEQzNjMsRDM2MSxEMzIzLEQzMjEsRDY0MSxEMzM0LEQzMzIsRDMzNyxEMzU4LEQzMzEsRDcxMSxEMzM1LEQzNDEsRDMzNixEMzU3LEQzNTYsRDM1NCxEMzU1LEQzNTEsRDM1OSxEMzUyLEQzNTMsRDczMSIsImN1c3RvbTpicmFuY2hlcyI6IjIwNDgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfUkdVYmlqbjF3IiwiY29nbml0bzp1c2VybmFtZSI6Im1kbS5hZG1pbiIsImF1ZCI6IjZwYmdlbTI0dW5rcGNyNGk2a2c1bXUxcW92IiwiZXZlbnRfaWQiOiIyY2M0MmNjMi1iZmVlLTRjZDktYmM5MC03OWY2OGRlMThkYTMiLCJjdXN0b206bmFtZSI6IkRhbmFuZyBCaXp6eSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjE4NDUwNDcwLCJjdXN0b206c3RhdHVzIjoiMCIsImV4cCI6MTYxODQ1NDA3MCwiaWF0IjoxNjE4NDUwNDcwLCJlbWFpbCI6ImRhbmFuZy5pc3dhZGlAYml6enkuY28uaWQifQ.Sm3ivGzr8EPczQxRMTFxPFQzwfZxYR1R1Ow_6NIF0ZURlXVUeRASqpM9nqfJZCp2SlLx8ClhjAbdFLL6k_CRUnD8WrAzcYThx9MRcpzVzhqt3nb9lGklvCKQS2QqMPJrY23zlx4LwDuvJ3b0PPpr5M4B-tHi5bHyqIO4zwV3Mp-fBjbklKVUnAoOPcsMsHG-JrMzDaoQdO9ri-GFoEF0O2jwSX6KpLoDFpuWTITanKqaY0orD0Z84Jw19NkzCAbyW-OGUbl_CsJD1RGzgs--KpOUZZutwW8oV6AwGIp695QBF_nkDzNo2vqq72Z7jk2YSwcCv5JY6qkfo4bc73o48w",
        'Content-Type': "application/json"
      }
    })
    .then((res) => {
      this.setState({
        post: res.data.rows
      })
      return res
    })
  }

  putApi = (id) => {
    axios.put(`https://3mh9tqpn5e.execute-api.ap-southeast-1.amazonaws.com/dev/somp/orders/updatestatus/${id}`,{
        doc_status:"CANCELED",
        remark: ""
    }, {
      headers: {
        Authorization: "eyJraWQiOiJ3Z0NIWVNjMjJGaHY2Yk1NdEJNR3VFT1dHdmxpcWtVSFpqb3JcL3VHNURqcz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1OWNiOTMzZS1hY2RjLTRjMWItYjE1NS05NGQ3MjJmYjZmMjUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiY3VzdG9tOnNhbGVzX29mZmljZXMiOiJEMzI0LEQ1MTEsRDMyNixEMTgxLEQzMjIsRFNBUzEsRDM2MixEMzE1LEQzMTItQkNJLEQzMjgsRDMxNCxEMTYxLEQxMjEsRDMyNyxEMzEyLEQzNjMsRDM2MSxEMzIzLEQzMjEsRDY0MSxEMzM0LEQzMzIsRDMzNyxEMzU4LEQzMzEsRDcxMSxEMzM1LEQzNDEsRDMzNixEMzU3LEQzNTYsRDM1NCxEMzU1LEQzNTEsRDM1OSxEMzUyLEQzNTMsRDczMSIsImN1c3RvbTpicmFuY2hlcyI6IjIwNDgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfUkdVYmlqbjF3IiwiY29nbml0bzp1c2VybmFtZSI6Im1kbS5hZG1pbiIsImF1ZCI6IjZwYmdlbTI0dW5rcGNyNGk2a2c1bXUxcW92IiwiZXZlbnRfaWQiOiIyY2M0MmNjMi1iZmVlLTRjZDktYmM5MC03OWY2OGRlMThkYTMiLCJjdXN0b206bmFtZSI6IkRhbmFuZyBCaXp6eSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjE4NDUwNDcwLCJjdXN0b206c3RhdHVzIjoiMCIsImV4cCI6MTYxODQ1NDA3MCwiaWF0IjoxNjE4NDUwNDcwLCJlbWFpbCI6ImRhbmFuZy5pc3dhZGlAYml6enkuY28uaWQifQ.Sm3ivGzr8EPczQxRMTFxPFQzwfZxYR1R1Ow_6NIF0ZURlXVUeRASqpM9nqfJZCp2SlLx8ClhjAbdFLL6k_CRUnD8WrAzcYThx9MRcpzVzhqt3nb9lGklvCKQS2QqMPJrY23zlx4LwDuvJ3b0PPpr5M4B-tHi5bHyqIO4zwV3Mp-fBjbklKVUnAoOPcsMsHG-JrMzDaoQdO9ri-GFoEF0O2jwSX6KpLoDFpuWTITanKqaY0orD0Z84Jw19NkzCAbyW-OGUbl_CsJD1RGzgs--KpOUZZutwW8oV6AwGIp695QBF_nkDzNo2vqq72Z7jk2YSwcCv5JY6qkfo4bc73o48w",
        'Content-Type': "application/json"
      }
    }).then((res) => {
      console.log(res)
      this.getApi()
    })
  }
  
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(json => {
    //   this.setState({
    //     post: json
    //   })
    // })
    this.getApi()
   
  }

  onHandleRemove = (id) => {
    this.putApi(id)
  }


  render() {
    return(
      <Fragment>
      <p>Blog Post</p>
      <hr/>
      <p className="section-title">Blog Post</p>
        {
          this.state.post.map(post => {
            return <Post key={post.id}
            data={post}
            remove={this.onHandleRemove}
            />
          })
        }
      </Fragment>
    )
  }
}

export default BlogPost

