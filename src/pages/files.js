import React from "react"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>My Site's Files</h1>
      <table>
        <thead>
          <tr>
            <th>absolutePath</th>
            <th>id</th>
            
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) =>
            <tr key={index}>
              <td>
                {node.absolutePath}
              </td>
              <td>
                {node.id}
              </td>
              
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export const query = graphql`
	query MyFilesQuery 
		{
			allFile {
			  edges {
				node {
				  id
				  
				  absolutePath
				}
			  }
			}
		}
	
`