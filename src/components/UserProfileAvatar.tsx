import NextImage from 'next/image';

interface UserProfileAvatarProps {
  imageUrl: string;
  altText?: string;
  size?: number; // Allow dynamic sizing
}

const UserProfileAvatar: React.FC<UserProfileAvatarProps> = ({ imageUrl, altText = "User Avatar", size = 40 }) => {
  // Using Next/Image for lh3.googleusercontent.com requires adding it to remotePatterns in next.config.js
  // For this iteration, we will use Next/Image and assume the config will be updated.
  return (
    <div
      className="rounded-full overflow-hidden relative"
      style={{ width: size, height: size }}
    >
      <NextImage
        src={imageUrl}
        alt={altText}
        width={size} // Use the size prop
        height={size} // Use the size prop
        className="bg-center bg-no-repeat aspect-square bg-cover" // Ensure image covers the area
        // objectFit="cover" // For older Next.js versions or specific needs, but className usually handles this with Tailwind
      />
    </div>
  );
};

export default UserProfileAvatar;
