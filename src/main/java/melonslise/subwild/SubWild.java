package melonslise.subwild;

import melonslise.subwild.common.config.SubWildConfig;
import melonslise.subwild.common.init.SubWildBlocks;
import melonslise.subwild.common.init.SubWildFeatures;
import melonslise.subwild.common.init.SubWildItems;
import melonslise.subwild.common.init.SubWildPlacements;
import net.minecraftforge.fml.ModLoadingContext;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.config.ModConfig.Type;

@Mod(SubWild.ID)
public class SubWild
{
	public static final String ID = "subwild";

	public SubWild()
	{
		ModLoadingContext.get().registerConfig(Type.COMMON, SubWildConfig.SPEC);

		SubWildBlocks.register();
		SubWildItems.register();
		SubWildPlacements.register();
		SubWildFeatures.register();
	}
}