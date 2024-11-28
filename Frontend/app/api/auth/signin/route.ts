export async function GET() {
    try {
        
        return new Response(JSON.stringify({message: "hi"}), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: unknown) {
        let errorMessage: string;
    
        if (error instanceof Error) {
          errorMessage = error.message;
        } else {
          errorMessage = 'Unknown error occurred';
        }
    
        console.error('Error:', errorMessage);
    
        return new Response(JSON.stringify({ error: errorMessage }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }

}