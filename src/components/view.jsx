import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ForumTopicView = () => {
  const { topicId } = useParams();
  const [topic, setTopic] = useState(null);
  const [posts, setPosts] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Mock user for demo purposes - would come from auth context in real app
  const currentUser = {
    id: 'user123',
    name: 'John Doe',
    isLoggedIn: true
  };

  useEffect(() => {
    // In a real implementation, we would fetch from your backend API
    const fetchTopicDetails = async () => {
      try {
        setLoading(true);
        
        // This would be your actual API endpoint
        // const response = await axios.get(`/api/forums/topics/${topicId}`);
        
        // Mock data for demonstration
        const mockTopic = {
          id: topicId,
          title: 'Canadian Maritime Traditions',
          description: 'Discussion about maritime traditions across Canadian coastal regions',
          author: 'Maritime_Expert',
          createdAt: '2025-04-05T14:30:00',
          category: 'Cultural Traditions',
          views: 245,
          replies: 18
        };

        const mockPosts = [
          {
            id: 'post1',
            authorName: 'Maritime_Expert',
            content: 'Welcome to this discussion about Canadian maritime traditions! I created this topic to explore the rich history of coastal communities across Canada.',
            createdAt: '2025-04-05T14:30:00',
            likes: 12
          },
          {
            id: 'post2',
            authorName: 'NovaScotian',
            content: 'In Nova Scotia, boat building has been a tradition since the 18th century. Many families still carry on traditional wooden boat building techniques.',
            createdAt: '2025-04-05T16:15:00',
            likes: 8
          },
          {
            id: 'post3',
            authorName: 'BCCoaster',
            content: 'On the west coast, First Nations communities have unique maritime traditions that often involve cedar canoes. The craftsmanship is incredible!',
            createdAt: '2025-04-06T09:45:00',
            likes: 15
          }
        ];

        setTopic(mockTopic);
        setPosts(mockPosts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load topic. Please try again later.');
        setLoading(false);
        console.error('Error fetching topic:', err);
      }
    };

    fetchTopicDetails();
  }, [topicId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    
    if (!newComment.trim()) return;
    
    // In a real app, this would be an API call to save the comment
    // await axios.post(`/api/forums/topics/${topicId}/comments`, { content: newComment });
    
    // For demo, just add to local state
    const newPost = {
      id: `post${posts.length + 1}`,
      authorName: currentUser.name,
      content: newComment,
      createdAt: new Date().toISOString(),
      likes: 0
    };
    
    setPosts([...posts, newPost]);
    setNewComment('');
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-CA', options);
  };

  if (loading) return <div className="text-center py-8">Loading topic details...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;
  if (!topic) return <div className="text-center py-8">Topic not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Breadcrumb navigation */}
      <div className="flex items-center text-sm mb-6">
        <Link to="/" className="text-purple-700 hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/forum" className="text-purple-700 hover:underline">Forum</Link>
        <span className="mx-2">/</span>
        <Link to={`/forum/category/${topic.category}`} className="text-purple-700 hover:underline">{topic.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{topic.title}</span>
      </div>
      
      {/* Topic header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold text-purple-800">{topic.title}</h1>
        <p className="text-gray-600 mt-2">{topic.description}</p>
        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <div>
            <span>Started by <span className="font-semibold">{topic.author}</span></span>
            <span className="mx-2">•</span>
            <span>{formatDate(topic.createdAt)}</span>
          </div>
          <div>
            <span>{topic.views} views</span>
            <span className="mx-2">•</span>
            <span>{topic.replies} replies</span>
          </div>
        </div>
      </div>
      
      {/* Posts/Comments section */}
      <div className="mb-6">
        {posts.map((post, index) => (
          <div key={post.id} className={`bg-white rounded-lg shadow-md p-6 mb-4 ${index === 0 ? 'border-l-4 border-purple-600' : ''}`}>
            <div className="flex justify-between mb-4">
              <div className="font-medium">{post.authorName}</div>
              <div className="text-sm text-gray-500">{formatDate(post.createdAt)}</div>
            </div>
            <div className="prose max-w-none">{post.content}</div>
            <div className="flex justify-between mt-4">
              <button className="text-sm text-gray-500 flex items-center gap-1 hover:text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                </svg>
                <span>Like ({post.likes})</span>
              </button>
              <button className="text-sm text-gray-500 hover:text-purple-600">Reply</button>
            </div>
          </div>
        ))}
      </div>
      
      {/* New comment form */}
      {currentUser.isLoggedIn ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Add Your Comment</h3>
          <form onSubmit={handleCommentSubmit}>
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="4"
              placeholder="Share your thoughts on this topic..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            ></textarea>
            <button 
              type="submit" 
              className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition-colors"
            >
              Post Comment
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <p>Please <Link to="/login" className="text-purple-700 hover:underline">log in</Link> to join the discussion.</p>
        </div>
      )}
    </div>
  );
};

export default ForumTopicView;